"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getGalleryProducts } from "@/lib/fetchData";
import imagesLoaded from "imagesloaded";

// Fisher-Yates Shuffle Function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load images from your Sanity gallery
    (async () => {
      try {
        const data = await getGalleryProducts();
        const allImages = shuffleArray(data);

        setImages(allImages.slice(0, 8));
      } catch (err) {
        console.error("Gallery load failed:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !images.length) return;

    const MasonryLayout = require("masonry-layout");
    const grid = document.querySelector(".masonry-grid");
    if (!grid) return;

    const initMasonry = () => {
      new MasonryLayout(grid, {
        itemSelector: ".masonry-item",
        percentPosition: true,
        horizontalOrder: true,
        // gutter: 20,
      });
      setLoading(false);
    };

    const imgLoad = imagesLoaded(grid);
    imgLoad.on("always", initMasonry);

    const videos = grid.querySelectorAll("video");
    let loadedVideos = 0;

    if (videos.length) {
      videos.forEach((video) => {
        if (video.readyState >= 2) {
          if (++loadedVideos === videos.length) initMasonry();
        } else {
          video.addEventListener("loadeddata", () => {
            if (++loadedVideos === videos.length) initMasonry();
          });
        }
      });
    }
  }, [images]);

  return (
    <section className="py-3 bg-white">
      <div className="container px-4 px-lg-5">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2
            className="display-2 fw-bold m-0"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              letterSpacing: "-2px",
              lineHeight: "1",
            }}
          >
            Our Gallery
          </h2>

          <Link
            href="/gallery"
            className="btn btn-outline-light px-4 py-2 fw-semibold"
            style={{
              borderColor: "#6B3FA0",
              color: "#6B3FA0",
              borderRadius: "12px",
              fontSize: "1.1rem",
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

        {/* Masonry Grid */}
        {loading ? (
          <div className="text-center py-5">
            <div
              className="spinner-border text-purple"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        ) : (
          <div className="row masonry-grid gx-3 gx-md-4 g-0">
            {images.map((item, i) => {
              const media = item.media?.[0];
              if (!media) return null;

              return (
                <div
                  key={i}
                  className="col-6 col-sm-4 col-md-3 col-lg-2_4 col-xl-2_5 mb-3 mb-md-4 masonry-item"
                  //   data-aos="zoom-in"
                  data-aos-delay={i * 50}
                >
                  <div
                    className="card border-0 shadow-sm overflow-hidden"
                    style={{ cursor: "pointer", transition: "0.4s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.imageUrl}
                        alt={media.tag || "Gallery Image"}
                        className="img-fluid rounded-3"
                      />
                    ) : (
                      <video
                        src={media.videoUrl}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="w-100 rounded-3"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bootstrap Masonry + AOS (optional) */}
      <script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        async
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
        async
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
      />

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
