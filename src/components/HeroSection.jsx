"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="position-relative d-flex align-items-center min-vh-100"
      style={{
        backgroundImage: "url('/assets/img/about/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
      ></div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-9 col-sm-12">
            {/* Heading */}
            <h1
              className="fw-normal mb-4"
              style={{
                fontFamily: "Wisteria,sans-serif",
                color: "#000",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
            >
              Elegant. Brighty
            </h1>

            {/* Description */}
            <p
              className="mb-4"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "1.15rem",
                fontWeight: 500,
                color: "#000",
                lineHeight: "1.7",
                maxWidth: "580px",
              }}
            >
              Handcrafted with passion, every piece tells a story of timeless
              beauty and unmatched craftsmanship. From classic diamonds to
              modern gold statements — designed for those who shine.
            </p>

            {/* Buttons */}
            <div
              className="d-flex flex-column flex-sm-row gap-3"
              style={{ rowGap: "14px" }}
            >
              {/* Button 1 */}
              <Link
                href="/shop"
                className="btn fw-semibold text-white"
                style={{
                  width: "100%", // full-width on mobile
                  maxWidth: "clamp(180px, 40vw, 240px)",
                  padding: "clamp(10px, 3vw, 15px) clamp(26px, 4vw, 42px)",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg, #70447B 0%, #000 100%)",
                  fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                  letterSpacing: "0.4px",
                  transition: "all 0.4s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #000 0%, #70447B 100%)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #70447B 0%, #000 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View Products
              </Link>

              {/* Button 2 */}
              <Link
                href="/gallery"
                className="btn fw-semibold text-white"
                style={{
                  width: "100%", // full-width on mobile
                  maxWidth: "clamp(180px, 40vw, 240px)",
                  padding: "clamp(10px, 3vw, 15px) clamp(26px, 4vw, 42px)",
                  borderRadius: "18px",
                  background: "linear-gradient(135deg, #153665 0%, #000 100%)",
                  fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                  letterSpacing: "0.4px",
                  transition: "all 0.4s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #000 0%, #153665 100%)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #153665 0%, #000 100%)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
