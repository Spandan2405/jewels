"use client";

import React, { useEffect, useState } from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import ShopLoader from "@/components/loader/shop/shop-loader";
import ErrorMsg from "@/components/common/error-msg";
import { getGalleryProducts } from "@/lib/fetchData";

import AOS from "aos";
import "aos/dist/aos.css";

const GallerySection = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // ✅ Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-in-out",
      once: true, // Animate only once per scroll
    });
  }, []);

  // ✅ Fetch gallery data
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const items = await getGalleryProducts();
        setMediaItems(items);
      } catch (error) {
        console.error("Error fetching gallery media:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
  }, []);

  // ✅ Modal controls
  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handleNext = () =>
    setSelectedIndex((prev) => (prev + 1) % mediaItems.length);
  const handlePrev = () =>
    setSelectedIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("custom-backdrop")) handleClose();
  };

  // ✅ Loading/Error/Empty States
  if (isLoading) return <ShopLoader loading={isLoading} />;
  if (isError)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ErrorMsg msg="There was an error loading the gallery." />
      </div>
    );
  if (mediaItems.length === 0)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ErrorMsg msg="No media found in gallery!" />
      </div>
    );

  return (
    <Wrapper>
      <SEO pageTitle="Gallery" />
      <HeaderTwo style_2={true} />

      {/* ======= GALLERY SECTION ======= */}
      <section
        className="py-5 bg-light min-vh-100"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="container">
          <div
            className="text-center mb-5"
            data-aos="fade-down"
            data-aos-duration="900"
          >
            <h2 className="fw-bold display-6 text-dark">Gallery</h2>
            <p className="text-muted">
              A glimpse of our latest designs, handcrafted jewelry & model
              shoots.
            </p>
          </div>

          {/* Masonry Layout - Fully Responsive */}
          <div
            className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            data-masonry='{"percentPosition": true}'
          >
            {mediaItems.map((item, i) => {
              const media = item.media?.[0];
              if (!media) return null;

              return (
                <div
                  key={i}
                  className="col"
                  data-aos="zoom-in"
                  data-aos-delay={i * 50}
                >
                  <div
                    className="card border-0 shadow-sm overflow-hidden"
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.4s ease, box-shadow 0.3s ease",
                    }}
                    onClick={() => handleOpen(i)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 20px rgba(0,0,0,0.2)";
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
                        className="img-fluid w-100 rounded-3"
                        style={{
                          objectFit: "cover",
                          aspectRatio: "1/1",
                          borderRadius: "1rem",
                        }}
                      />
                    ) : (
                      <video
                        src={media.videoUrl}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="w-100 rounded-3"
                        style={{
                          borderRadius: "1rem",
                          aspectRatio: "1/1",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======= MODAL VIEWER ======= */}
      {selectedIndex !== null && (
        <div
          className="custom-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center animate__animated animate__fadeIn"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 1055,
            padding: "1rem",
            animation: "fadeIn 0.4s ease",
          }}
          onClick={handleBackdropClick}
        >
          <div
            className="modal-content bg-transparent border-0 text-center position-relative"
            style={{
              width: "100%",
              maxWidth: "900px",
              maxHeight: "90vh",
              transition: "transform 0.4s ease",
            }}
          >
            {/* ✅ Fixed Close Button */}
            <button
              className="btn btn-light position-fixed top-0 end-0 m-3"
              style={{
                zIndex: 1060,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontWeight: "bold",
                lineHeight: "1",
              }}
              onClick={handleClose}
            >
              ✕
            </button>

            {/* Media Display */}
            {mediaItems[selectedIndex].media?.[0].type === "image" ? (
              <img
                src={mediaItems[selectedIndex].media[0].imageUrl}
                alt="Zoomed"
                className="img-fluid rounded-3 w-100"
                style={{
                  maxHeight: "80vh",
                  objectFit: "contain",
                  transition: "transform 0.4s ease-in-out",
                }}
              />
            ) : (
              <video
                src={mediaItems[selectedIndex].media[0].videoUrl}
                controls
                autoPlay
                className="img-fluid rounded-3 w-100"
                style={{
                  maxHeight: "80vh",
                  borderRadius: "10px",
                  objectFit: "contain",
                  transition: "opacity 0.4s ease-in-out",
                }}
              />
            )}

            {/* Navigation Controls */}
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
