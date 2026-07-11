import Image from "next/image";
import Link from "next/link";

const HomeQuoteBand = ({ quoteBand }) => {
  return (
    <footer className="rs-quote-band">
      <div className="rs-shell">
        <div className="rs-quote-band__top">
          <div className="rs-quote-band__brand">
            <Image
              src="/assets/img/logos.svg"
              alt="RareStonz"
              width={280}
              height={92}
            />
            <p className="rs-quote-band__quote">{quoteBand.quote}</p>
          </div>

          <div className="rs-quote-band__columns">
            <div>
              <h3>{quoteBand.collectionsTitle}</h3>
              <ul>
                {quoteBand.collections.map((item) => (
                  <Link
                    href={`/shop?category=${item.toLowerCase()}`}
                    key={item}
                  >
                    <li key={item}>{item}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h3>{quoteBand.contactTitle}</h3>
              <ul>
                {quoteBand.contacts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="rs-quote-band__bottom">
          <span>{quoteBand.copyright}</span>
          <span>{quoteBand.rights}</span>
        </div>
      </div>
    </footer>
  );
};

export default HomeQuoteBand;
