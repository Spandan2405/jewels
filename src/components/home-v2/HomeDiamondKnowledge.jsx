const iconByType = {
  cut: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M9 19l7-9h16l7 9-15 19L9 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 10l8 28M32 10l-8 28M9 19h30M20 19h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  colour: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 8c7.5 0 13.5 6 13.5 13.4 0 4.3-2.1 7.2-5.2 9.2-2.2 1.4-3.3 4.1-2.8 6.5.4 2.2-1.4 4.2-3.7 4.2H24c-7.5 0-13.5-6-13.5-13.4S16.5 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="19" cy="18" r="1.6" fill="currentColor" />
      <circle cx="25" cy="15.5" r="1.6" fill="currentColor" />
      <circle cx="30" cy="20" r="1.6" fill="currentColor" />
      <circle cx="20.5" cy="24.5" r="1.6" fill="currentColor" />
    </svg>
  ),
  clarity: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => {
        const x = 10 + (i % 5) * 7;
        const y = 10 + Math.floor(i / 5) * 7;
        return <circle key={i} cx={x} cy={y} r="1.4" fill="currentColor" />;
      })}
    </svg>
  ),
  carat: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M18 9h12M13 21h22M24 9v12m0 0l-6 7m6-7 6 7M15 38h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 38c0-4.5 3.6-8.2 8-8.2s8 3.7 8 8.2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
};

const HomeDiamondKnowledge = ({ diamondCards }) => {
  return (
    <section className="rs-diamonds">
      <div className="rs-shell">
        <div className="rs-diamonds__head">
          <p className="rs-diamonds__eyebrow">{diamondCards.eyebrow}</p>
          <h2 className="rs-diamonds__title">{diamondCards.title}</h2>
          <p className="rs-diamonds__intro">{diamondCards.description}</p>
        </div>
        <div className="rs-diamonds__grid">
          {diamondCards.cards.map((card) => (
            <article key={card.title} className="rs-diamonds__card">
              <div className="rs-diamonds__icon">
                {iconByType[card.icon] || iconByType.cut}
              </div>
              <h3>{card.title}</h3>
              <h4>{card.subtitle}</h4>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeDiamondKnowledge;
