import Head from "next/head";

const SEO = ({
  pageTitle = " Rarestonz - Exquisite Diamond & Gold Jewelry",
}) => (
  <>
    <Head>
      <title>{`${pageTitle} | Rarestonz`}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Discover Rarestonz - a premium online jewelry store offering curated collections of diamond rings, gold bands, earrings, and necklaces. Shop luxury, handmade, and lab-grown jewelry crafted with elegance."
      />
      <meta
        name="keywords"
        content="Rarestonz, diamond jewelry, gold rings, earrings, necklaces, lab-grown diamonds, fine jewelry, online jewelry store, Indian jewelry brand"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Rarestonz Team" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content={pageTitle} />
      <meta
        property="og:description"
        content="Explore handcrafted and designer jewelry collections by Rarestonz. Ethical sourcing, modern designs, and luxury redefined."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://rarestonz.vercel.app" />
      <meta name="twitter:title" content={pageTitle} />
      <meta
        name="twitter:description"
        content="Shop elegant diamond and gold jewelry online at Rarestonz. Modern luxury made affordable."
      />
      <meta name="twitter:image" content="/seo-banner.jpg" />
      <link rel="canonical" href="https://rarestonz.vercel.app" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
