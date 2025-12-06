// components/landing/AboutSection.jsx
import Image from "next/image";
import about from "../../public/assets/img/about/About.jpg";

const AboutSection = () => {
  return (
    <section className="py-3">
      <div className="container">
        {/* ===== ABOUT US + IMAGE ===== */}
        <div className="row align-items-center md:g-5 md:mb-4">
          <div className="col-lg-6">
            <h2 className="display-1 fw-bold" style={headingStyle}>
              About Us
            </h2>
            <p style={textStyle}>
              For over three decades, we have been crafting timeless jewelry
              that celebrates life's most precious moments. From engagement
              rings that mark forever to heirloom pieces passed down through
              generations, every creation is born from passion, precision, and
              an unwavering commitment to excellence.
            </p>
            <p style={textStyle}>
              Our atelier combines traditional goldsmith techniques with
              contemporary design, using only the finest ethically sourced
              diamonds and gemstones. Each piece is made to order — uniquely
              yours, forever cherished.
            </p>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <div
              className="d-inline-block overflow-hidden mb-4"
              style={{
                borderRadius: "28px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={about}
                alt="Luxury jewelry atelier"
                width={600}
                height={500}
                className="img-fluid"
                style={{ borderRadius: "28px" }}
              />
            </div>
          </div>
        </div>

        {/* ===== VISION & MISSION ===== */}
        <div className="row g-lg-7">
          <div className="col-lg-6">
            <h3 className="display-1 fw-bold" style={headingStyle}>
              Our Vision
            </h3>
            <p style={textStyle}>
              To be the most trusted name in fine jewelry worldwide — where
              timeless elegance meets conscious luxury, and every piece becomes
              a legacy.
            </p>
          </div>

          <div className="col-lg-6">
            <h3
              className="display-1 fw-bold"
              style={{
                fontFamily: "Cormorant, serif",
                letterSpacing: "-1px",
                color: "#111",
              }}
            >
              Our Mission
            </h3>
            <p style={textStyle}>
              To craft breathtaking jewelry with integrity — using ethically
              sourced materials, supporting artisan communities, and delivering
              joy that lasts a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const headingStyle = {
  fontFamily: "Cormorant, serif",
  // fontSize: "clamp(2rem, 5vw, 3.5rem)",
  color: "#111",
  letterSpacing: "-1.5px",
};

const textStyle = {
  lineHeight: "1.75",
  fontSize: "1.1rem",
  fontFamily: "Lato, sans-serif",
  // color: "#444",
};

export default AboutSection;
