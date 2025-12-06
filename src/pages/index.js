import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import JewelryBanner from "@/components/banner/jewelry-banner";
import JewelryShopBanner from "@/components/shop-banner/jewelry-shop-banner";
import JewelryAbout from "@/components/about/jewelry-about";
import InstagramAreaFour from "@/components/instagram/instagram-area-4";
import Footer from "@/layout/footers/footer";
import BeautyBanner from "@/components/banner/beauty-banner";
import ErrorPage from "./404";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import ProductsCarousel from "@/components/ProductsCarousel";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.replace("/shop"); // replace avoids adding to browser history
  // }, [router]);

  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <HeaderThree />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CallToActionBanner />
      <ProductsCarousel />
      <Testimonials />
      <GallerySection />
      <Footer />
    </Wrapper>
  );
}

{
  /* <JewelryBanner /> */
}
{
  /* <BeautyBanner /> */
}
{
  /* <ErrorPage /> */
}
{
  /* <JewelryShopBanner /> */
}
{
  /* <JewelryAbout /> */
}
{
  /* <InstagramAreaFour /> */
}
