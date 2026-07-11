import Image from "next/image";
import Link from "next/link";

const HomeDesigns = ({ designsSection }) => {
  const renderTile = (item, index) => {
    if (item?.src) {
      return (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 760px) 95vw, (max-width: 1024px) 50vw, 30vw"
        />
      );
    }
    return (
      <div className="rs-designs__placeholder">
        <span>Image {index + 1}</span>
      </div>
    );
  };

  return (
    <section className="rs-designs">
      <div className="rs-shell">
        <div className="rs-designs__head">
          <p className="rs-designs__eyebrow">{designsSection.eyebrow}</p>
          <h2 className="rs-designs__title">{designsSection.title}</h2>
        </div>
        <div className="rs-designs__mosaic">
          {designsSection.galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`rs-designs__tile rs-designs__tile--${index + 1}`}
            >
              {renderTile(item, index)}
            </article>
          ))}
        </div>
        <div className="rs-designs__cta">
          <Link href={designsSection.cta.href} className="rs-designs__button">
            {designsSection.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeDesigns;
