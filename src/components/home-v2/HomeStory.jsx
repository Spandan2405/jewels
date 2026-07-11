"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_MS = 4600;
const SWIPE_THRESHOLD = 42;

const HomeStory = ({ storyPanel }) => {
  const items = storyPanel?.testimonials || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (items.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [items.length]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (!items.length) return;
    const endX = event.changedTouches[0].clientX;
    const delta = endX - touchStartX.current;

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) {
      setActiveIndex((prev) => (prev + 1) % items.length);
      return;
    }
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section id="about" className="rs-story">
      <svg
        className="rs-story__ring"
        viewBox="0 0 460 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Ambient glow behind ring */}
        <ellipse cx="230" cy="368" rx="196" ry="108" fill="rgba(148,68,255,0.07)" />

        {/* Ring band — bottom arc */}
        <path
          d="M 50 415 Q 50 500 230 500 Q 410 500 410 415"
          stroke="rgba(208,172,255,0.54)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Ring band — left side */}
        <path
          d="M 50 415 L 105 292"
          stroke="rgba(208,172,255,0.54)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Ring band — right side */}
        <path
          d="M 410 415 L 355 292"
          stroke="rgba(208,172,255,0.54)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Setting shoulders */}
        <path
          d="M 105 292 Q 105 226 230 210 Q 355 226 355 292"
          stroke="rgba(216,182,255,0.57)"
          strokeWidth="14"
        />

        {/* 4 prongs holding the diamond */}
        <line x1="135" y1="268" x2="162" y2="158" stroke="rgba(218,188,255,0.56)" strokeWidth="11" strokeLinecap="round" />
        <line x1="325" y1="268" x2="298" y2="158" stroke="rgba(218,188,255,0.56)" strokeWidth="11" strokeLinecap="round" />
        <line x1="178" y1="242" x2="182" y2="120" stroke="rgba(218,188,255,0.52)" strokeWidth="10" strokeLinecap="round" />
        <line x1="282" y1="242" x2="278" y2="120" stroke="rgba(218,188,255,0.52)" strokeWidth="10" strokeLinecap="round" />

        {/* Diamond — girdle (outer boundary) */}
        <circle cx="230" cy="164" r="120" stroke="rgba(224,196,255,0.54)" strokeWidth="9" fill="rgba(170,118,255,0.04)" />

        {/* Diamond — table (flat top face) */}
        <circle cx="230" cy="164" r="60" stroke="rgba(238,215,255,0.48)" strokeWidth="6.5" fill="rgba(194,156,255,0.06)" />

        {/* Main bezel facets — 8 spokes from table edge to girdle */}
        <line x1="230" y1="44"  x2="230" y2="104" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />
        <line x1="315" y1="79"  x2="272" y2="120" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />
        <line x1="350" y1="164" x2="290" y2="164" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />
        <line x1="315" y1="249" x2="272" y2="208" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />
        <line x1="230" y1="284" x2="230" y2="224" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />
        <line x1="145" y1="249" x2="188" y2="208" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />
        <line x1="110" y1="164" x2="170" y2="164" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />
        <line x1="145" y1="79"  x2="188" y2="120" stroke="rgba(220,186,255,0.36)" strokeWidth="5.5" />

        {/* Star facet lines — inner connections from table to girdle midpoints */}
        <line x1="272" y1="120" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />
        <line x1="290" y1="164" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />
        <line x1="272" y1="208" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />
        <line x1="230" y1="224" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />
        <line x1="188" y1="208" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />
        <line x1="170" y1="164" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />
        <line x1="188" y1="120" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />
        <line x1="230" y1="104" x2="230" y2="164" stroke="rgba(218,184,255,0.24)" strokeWidth="4" />

        {/* Highlight on table */}
        <ellipse cx="212" cy="146" rx="22" ry="14" fill="rgba(255,248,255,0.055)" transform="rotate(-18 212 146)" />
      </svg>

      <div className="rs-shell rs-story__inner">
        <p className="rs-story__eyebrow">{storyPanel.eyebrow}</p>
        <h2 className="rs-story__title">{storyPanel.title}</h2>

        <div
          className="rs-story__carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className={`rs-story__slide ${
                activeIndex === index ? "is-active" : ""
              }`}
            >
              <p className="rs-story__quote">"{item.quote}"</p>
              <p className="rs-story__meta">
                <span>{item.name}</span>
                <span>•</span>
                <span>{item.location}</span>
                <span>•</span>
                <span>{item.piece}</span>
              </p>
            </article>
          ))}
        </div>

        <div className="rs-story__dots">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              className={`rs-story__dot ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStory;
