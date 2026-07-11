import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import HomeV2 from "@/components/home-v2";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <HeaderThree />
      <HomeV2 />
    </Wrapper>
  );
}
