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
                fontFamily: "Cormorant, serif",
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
            <div className="d-flex flex-wrap gap-3">
              {/* Button 1 */}
              <Link
                href="/shop"
                className="btn btn-lg fw-semibold px-md-5 py-md-3 text-white"
                style={{
                  minWidth: "210px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #70447B 0%, #000 100%)",
                  transition: "all 0.6s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, #000 0%, #70447B 100%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, #70447B 0%, #000 100%)")
                }
              >
                View Products
              </Link>

              {/* Button 2 */}
              <Link
                href="/gallery"
                className="btn btn-lg fw-semibold px-md-5 py-md-3 text-white rounded-pill"
                style={{
                  minWidth: "210px",
                  background: "linear-gradient(135deg, #153665 0%, #000 100%)",
                  transition: "all 0.6s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, #000 0%, #153665 100%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(135deg, #153665 0%, #000 100%)")
                }
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
