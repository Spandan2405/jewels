import Image from "next/image";

const iconByKey = {
  consultation: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 39c1.8-7 7.2-11 14-11s12.2 4 14 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M31 11h8M35 7v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  stone: (
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
  design: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 7v5M24 36v5M7 24h5M36 24h5M12.5 12.5l3.5 3.5M32 32l3.5 3.5M35.5 12.5L32 16M16 32l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  craft: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M30 8l10 10-7 2-5 5-2 7-10-10 7-2 5-5 2-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 40h13M13 27v13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 8l14 8v16l-14 8-14-8V16l14-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 16l14 8 14-8M24 24v16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 28h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const HomeProcess = ({ processSteps }) => {
  return (
    <section id="process" className="rs-process">
      <div className="rs-shell">
        <div className="rs-process__head">
          <p className="rs-process__eyebrow">{processSteps.eyebrow}</p>
          <h2 className="rs-process__title">{processSteps.title}</h2>
        </div>
        <div className="rs-process__layout">
          <div className="rs-process__image">
            <Image
              src={processSteps.image}
              alt="How we work"
              width={820}
              height={1100}
              priority={false}
            />
          </div>
          <div className="rs-process__steps">
            {processSteps.steps.map((step) => (
              <article key={step.step} className="rs-process__step">
                <span className="rs-process__number">{step.step}</span>
                <div className="rs-process__icon">
                  {iconByKey[step.icon] || iconByKey.consultation}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
