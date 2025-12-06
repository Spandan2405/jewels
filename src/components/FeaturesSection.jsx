"use client";

import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "✦",
      title: "Master Craftsmanship",
      text: "Every piece is meticulously handcrafted by artisans with decades of experience, ensuring flawless detail and quality.",
    },
    {
      icon: "◆",
      title: "Ethically Sourced Gems",
      text: "We only use conflict-free diamonds and responsibly sourced precious stones, certified for purity and origin.",
    },
    {
      icon: "■",
      title: "Lifetime Warranty",
      text: "Enjoy complete peace of mind with our lifetime guarantee on materials and workmanship for every creation.",
    },
    {
      icon: "◈",
      title: "Bespoke Design Service",
      text: "Bring your vision to life with our personalized design consultations and one-of-a-kind custom jewelry.",
    },
  ];

  return (
    <section className="position-relative py-4 py-md-5">
      <div className="container">
        {/* Gradient Box Wrapper */}
        <div
          className="mx-auto py-4 p-lg-5"
          style={{
            background: "linear-gradient(90deg, #f2c2ee 15%, #d66fee 100%)",
            borderRadius: "22px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            maxWidth: "1300px",
          }}
        >
          <div className="row g-lg-5 justify-content-center text-center">
            {features.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="d-flex flex-column align-items-center">
                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center md:mb-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      fontSize: "28px",
                      color: "#1a1a1a",
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h5
                    className="fw-semibold mb-3"
                    style={{
                      fontFamily: "Lato, serif",
                      fontSize: "1.2rem",
                      letterSpacing: "-0.3px",
                      color: "#1a1a1a",
                    }}
                  >
                    {item.title}
                  </h5>

                  {/* Description */}
                  <p
                    className="small mb-0"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      maxWidth: "300px",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
