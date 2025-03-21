import React, { useState, useEffect } from "react";
// internal
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import ErrorMsg from "@/components/common/error-msg";
// import { useGetProductQuery } from '@/redux/features/productApi';
import ProductDetailsBreadcrumb from "@/components/breadcrumb/product-details-breadcrumb";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import PrdDetailsLoader from "@/components/loader/prd-details-loader";
import { getProductById } from "@/lib/fetchData";

const ProductDetailsPage = ({ query }) => {
  const [productItem, setProductItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // const { data: product } = await getRing(query.Product_ID);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const prod = await getProductById(query.id);
        setProductItem(prod);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [query]);

  // decide what to render
  console.log(productItem);
  let content = null;
  if (isLoading) {
    content = <PrdDetailsLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!productItem) return;
  if (!isLoading && !isError && productItem) {
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
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};
