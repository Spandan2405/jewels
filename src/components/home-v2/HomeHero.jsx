import Image from "next/image";
import Link from "next/link";

const HomeHero = ({ hero }) => {
  const title = hero.title.replace(", ", ",\n");
  const eyebrowParts = hero.eyebrow
    .replaceAll("Â·", "·")
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <section className="rs-hero">
      <div className="rs-hero__portrait" aria-hidden="true">
        <Image src={hero.image} alt="" width={1920} height={966} priority />
      </div>
      <div className="rs-shell">
        <div className="rs-hero__content rs-hero__content--landing">
          <p className="rs-eyebrow rs-hero__eyebrow">
            {eyebrowParts.map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                {index < eyebrowParts.length - 1 ? (
                  <span aria-hidden="true" className="rs-hero__eyebrow-dot">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </p>
          <h1 className="rs-hero__title">{title}</h1>
          <p className="rs-hero__description">{hero.description}</p>
          <div className="rs-hero__actions">
            <Link
              href={hero.primaryCta.href}
              className="rs-btn rs-btn--hero rs-btn--hero-primary"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="rs-btn rs-btn--hero rs-btn--hero-secondary"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
