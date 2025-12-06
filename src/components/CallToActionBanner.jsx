// components/landing/CallToActionBanner.jsx
import Link from "next/link";

const CallToActionBanner = () => {
  return (
    <section
      className="position-relative d-flex align-items-center py-3"
      style={{
        minHeight: "620px",
        width: "auto",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25)), url('/assets/img/about/cta.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-xl-10">
            {/* Main Headline */}
            <h2
              className="display-2 fw-bold mb-4 text-white"
              style={{
                fontFamily: "Roboto, sans-serif",
                lineHeight: "1.5",
                letterSpacing: "-1.5px",
              }}
            >
              Enjoy shopping and choose
              <br />
              the beauty that will always
              <br />
              be with you!
            </h2>

            {/* Button – exact style from screenshot */}
            <Link
              href="/shop"
              className="btn btn-dark btn-lg px-5 py-3 rounded-pill fw-medium text-white mt-3"
              style={{
                backgroundColor: "#1a1a1a",
                border: "none",
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#333";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Shop the collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
