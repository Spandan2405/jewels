"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getGalleryProducts } from "@/lib/fetchData";
import { ArrowNext, ArrowNextSm, ArrowPrevSm, ArrowRight } from "@/svg";
import ArrowLeft from "@/svg/arrow-left";

// Shuffle Function
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const ProductsSlider = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch images
  useEffect(() => {
    (async () => {
      try {
        const galleryData = await getGalleryProducts();

        const imageItems = galleryData
          .flatMap((item) => item.media || [])
          .filter((m) => m.type === "image")
          .slice(0, 10)
          .map((media, i) => ({
            id: i,
            src: media.imageUrl,
            alt: `Jewelry item ${i + 1}`,
          }));

        setProducts(shuffleArray(imageItems));
      } catch (err) {
        console.error("Error fetching gallery:", err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  /* ================= LOADING ================= */
  if (isLoading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );

  /* ================= ERROR ================= */
  if (isError || products.length === 0)
    return (
      <div className="text-center py-5">
        <p className="text-muted">No products available right now.</p>
      </div>
    );

  /* ================= SLIDER ================= */
  return (
    <section className="py-5 overflow-hidden">
      <div className="container px-3 px-lg-0">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2
            className="fw-normal m-0"
            style={{
              fontFamily: "Wisteria,sans-serif",
              color: "#000",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              letterSpacing: "-1px",
              lineHeight: "1.1",
            }}
          >
            Our Products
          </h2>

          <Link
            href="/shop"
            className="btn btn-outline-light p-2 px-md-4 py-md-2 fw-semibold gap-2 d-flex align-items-center"
            style={{
              borderColor: "#6B3FA0",
              color: "#6B3FA0",
              borderRadius: "12px",
              fontSize: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            View All
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Horizontal Scrollable Row */}
        <div
          className="d-flex gap-4 overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            padding: "8px 0",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                flex: "0 0 clamp(250px, 60vw, 420px)",
                scrollSnapAlign: "start",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "transform 0.4s ease",
              }}
              className="product-card"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={420}
                height={500}
                className="w-100 h-100 object-fit-cover"
                style={{
                  borderRadius: "24px",
                  height: "clamp(280px, 55vw, 500px)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div
          className="d-flex justify-content-between align-items-center d-md-none mt-2"
          style={{ width: "100%" }}
        >
          <ArrowPrevSm />

          <small
            className="text-muted text-center"
            style={{ flexGrow: 1, fontSize: "0.95rem" }}
          >
            Swipe to explore
          </small>

          <ArrowNextSm />
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        /* Hover zoom on desktops only */
        @media (min-width: 992px) {
          .product-card:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSlider;
