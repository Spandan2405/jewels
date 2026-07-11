const HomeMarquee = ({ items }) => {
  const loopItems = [...items, ...items];

  return (
    <section className="rs-marquee" aria-label="Diamond cuts">
      <div className="rs-marquee__track">
        {loopItems.map((item, index) => (
          <span key={`${item}-${index}`} className="rs-marquee__unit">
            <span className="rs-marquee__item">{item}</span>
            <span className="rs-marquee__dot" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default HomeMarquee;