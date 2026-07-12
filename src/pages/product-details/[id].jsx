import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import ErrorMsg from "@/components/common/error-msg";
import ProductDetailsBreadcrumb from "@/components/breadcrumb/product-details-breadcrumb";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import { getProductById } from "@/lib/fetchData";

const ProductDetailsPage = ({ productItem, isError }) => {
  let content = null;

  if (isError || !productItem) {
    content = <ErrorMsg msg="There was an error" />;
  } else {
    content = (
      <>
        <ProductDetailsBreadcrumb
          category={productItem.productType}
          title={productItem.name}
        />
        <ProductDetailsArea productItem={productItem} />
      </>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Product Details" />
      <HeaderTwo style_2={true} />
      {content}
      <Footer />
    </Wrapper>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = async (context) => {
  const { query } = context;
  try {
    const productItem = await getProductById(query.id);
    return {
      props: { productItem: productItem || null, isError: !productItem },
    };
  } catch (error) {
    console.error(error);
    return { props: { productItem: null, isError: true } };
  }
};
