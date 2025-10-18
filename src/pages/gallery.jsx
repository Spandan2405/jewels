"use client";

import React, { useEffect, useState } from "react";
// AOS — handles scroll-based animations.
import AOS from "aos";
import "aos/dist/aos.css";
// imagesLoaded — ensures Masonry initializes after images/videos load.
import imagesLoaded from "imagesloaded";

import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import ShopLoader from "@/components/loader/shop/shop-loader";
import ErrorMsg from "@/components/common/error-msg";
import { getGalleryProducts } from "@/lib/fetchData";

const GallerySection = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  // ✅ Fetch data
  useEffect(() => {
    (async () => {
      try {
        const data = await getGalleryProducts();
        setMediaItems(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !mediaItems.length) return;

    const MasonryLayout = require("masonry-layout");
    const grid = document.querySelector(".masonry-grid");
    if (!grid) return;

    const initMasonry = () => {
      new MasonryLayout(grid, {
        itemSelector: ".masonry-item",
        percentPosition: true,
        horizontalOrder: true,
      });
      // ✅ hide loader once Masonry initialized
      setIsLoading(false);
    };

    // Wait for all images
    const imgLoad = imagesLoaded(grid);
    imgLoad.on("always", initMasonry);

    // ✅ Wait for videos too
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
  }, [mediaItems]);

  // ✅ Modal controls
  const handleOpen = (i) => setSelectedIndex(i);
  const handleClose = () => setSelectedIndex(null);
  const handleNext = () =>
    setSelectedIndex((prev) => (prev + 1) % mediaItems.length);
  const handlePrev = () =>
    setSelectedIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  const handleBackdropClick = (e) =>
    e.target.classList.contains("custom-backdrop") && handleClose();

  // ✅ Loading / Error / Empty
  if (isLoading) return <ShopLoader loading />;
  if (isError)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ErrorMsg msg="Error loading the gallery. Please try again later." />
      </div>
    );
  if (!mediaItems.length)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ErrorMsg msg="No media found in gallery!" />
      </div>
    );

  return (
    <Wrapper>
      <SEO pageTitle="Gallery" />
      <HeaderTwo style_2 />

      {/* ======= GALLERY ======= */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="fw-bold display-6 text-dark">Gallery</h2>
            <p className="text-muted">
              A glimpse of our latest designs, handcrafted jewelry & model
              shoots.
            </p>
          </div>

          {/* Masonry Grid */}
          <div
            className="row masonry-grid"
            data-masonry='{"percentPosition": true }'
          >
            {mediaItems.map((item, i) => {
              const media = item.media?.[0];
              if (!media) return null;

              return (
                <div
                  key={i}
                  className="col-6 col-md-4 col-lg-3 mb-4 masonry-item"
                  data-aos="zoom-in"
                  data-aos-delay={i * 50}
                >
                  <div
                    className="card border-0 shadow-sm overflow-hidden"
                    onClick={() => handleOpen(i)}
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
        </div>
      </section>

      {/* ======= MODAL ======= */}
      {selectedIndex !== null && (
        <div
          className="custom-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center animate__animated animate__fadeIn"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 1055,
            padding: "1rem",
          }}
          onClick={handleBackdropClick}
        >
          <div
            className="modal-content bg-transparent border-0 text-center position-relative"
            style={{ width: "100%", maxWidth: "900px", maxHeight: "90vh" }}
          >
            <button
              className="btn btn-light position-fixed top-0 end-0 m-3"
              style={{
                zIndex: 1060,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontWeight: "bold",
              }}
              onClick={handleClose}
            >
              ✕
            </button>

            {mediaItems[selectedIndex].media?.[0].type === "image" ? (
              <img
                src={mediaItems[selectedIndex].media[0].imageUrl}
                alt="Zoomed"
                className="img-fluid rounded-3 w-100"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
            ) : (
              <video
                src={mediaItems[selectedIndex].media[0].videoUrl}
                controls
                autoPlay
                className="img-fluid rounded-3 w-100"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
            )}

            <div className="d-flex justify-content-center align-items-center mt-3 flex-wrap gap-2">
              <button
                className="btn btn-outline-light btn-sm px-4 py-2 fw-semibold"
                onClick={handlePrev}
              >
                ⟨ Prev
              </button>
              <button
                className="btn btn-outline-light btn-sm px-4 py-2 fw-semibold"
                onClick={handleNext}
              >
                Next ⟩
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </Wrapper>
  );
};

export default GallerySection;
