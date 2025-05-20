import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import JewelryBanner from "@/components/banner/jewelry-banner";
import JewelryShopBanner from "@/components/shop-banner/jewelry-shop-banner";
import JewelryAbout from "@/components/about/jewelry-about";
import InstagramAreaFour from "@/components/instagram/instagram-area-4";
import Footer from "@/layout/footers/footer";
import BeautyBanner from "@/components/banner/beauty-banner";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <HeaderThree />
      <JewelryBanner />
      <BeautyBanner />
      {/* <JewelryShopBanner />
      <JewelryAbout />
      <InstagramAreaFour /> */}
      <Footer />
    </Wrapper>
  );
}
