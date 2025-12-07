"use client";

import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Elena Vasquez",
    text: "The craftsmanship is breathtaking. My engagement ring still takes my breath away every single day.",
    avatar: "/assets/img/testimonial/profile1.jpg",
  },
  {
    name: "Sophia Chen",
    text: "I’ve never received so many compliments on a piece of jewelry. The attention to detail truly sets them apart.",
    avatar: "/assets/img/testimonial/profile2.jpg",
  },
  {
    name: "Aisha Rahman",
    text: "They turned my grandmother’s old ring into a modern masterpiece. The experience was flawless.",
    avatar: "/assets/img/testimonial/profile3.jpg",
  },
  {
    name: "Isabella Moreau",
    text: "The necklace feels like it was made just for me — because it was. Truly bespoke luxury.",
    avatar: "/assets/img/testimonial/profile4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-3 bg-white">
      <div className="container">
        {/* SECTION TITLE */}
        <h2
          className="fw-bold mb-4"
          style={{
            fontFamily: "Cormorant, serif",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            letterSpacing: "-1px",
            color: "#000",
          }}
        >
          Clients Testimonials
        </h2>

        {/* TESTIMONIAL LIST */}
        <div className="d-flex flex-column gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="d-flex align-items-center bg-white shadow-sm px-4 px-md-5 py-2"
              style={{
                borderRadius: "50px",
                minHeight: "150px",
                border: "1px solid #f1f1f1",
              }}
            >
              {/* AVATAR */}
              <div className="me-4 flex-shrink-0">
                <div
                  className="rounded-circle overflow-hidden"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={100}
                    height={100}
                    className="object-fit-cover w-100 h-100"
                  />
                </div>
              </div>

              {/* QUOTE + TEXT */}
              <div className="d-flex align-items-start gap-3">
                {/* QUOTE ICON */}
                <div
                  style={{
                    opacity: 0.15,
                    fontSize: "48px",
                    lineHeight: "0.8",
                    fontWeight: "bold",
                    marginTop: "-5px",
                  }}
                >
                  &#8220;
                </div>

                {/* TEXT CONTENT */}
                <div>
                  <p
                    className="mb-1 small"
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.5",
                      fontStyle: "italic",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {t.text}
                  </p>

                  <p
                    className="fw-bold mt-2"
                    style={{
                      fontFamily: "Cormorant, serif",
                      fontSize: "1.25rem",
                    }}
                  >
                    {t.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
