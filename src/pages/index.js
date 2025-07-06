import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import JewelryBanner from "@/components/banner/jewelry-banner";
// import JewelryShopBanner from "@/components/shop-banner/jewelry-shop-banner";
// import JewelryAbout from "@/components/about/jewelry-about";
// import InstagramAreaFour from "@/components/instagram/instagram-area-4";
import Footer from "@/layout/footers/footer";
import BeautyBanner from "@/components/banner/beauty-banner";
import ErrorPage from "./404";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/shop"); // replace avoids adding to browser history
  }, [router]);

  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      {/* <HeaderThree />
      <JewelryBanner />
      <BeautyBanner /> */}
      <ErrorPage />
      {/* <JewelryShopBanner />
      <JewelryAbout />
      <InstagramAreaFour /> */}
      <Footer />
    </Wrapper>
  );
}
