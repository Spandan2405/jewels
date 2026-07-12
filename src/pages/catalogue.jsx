import React, { useState } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import ErrorMsg from "@/components/common/error-msg";
import Footer from "@/layout/footers/footer";
import { getCatalogueProducts } from "@/lib/fetchData";
import MobileFilter from "@/components/shop/MobileFilter";

const CataloguePage = ({ query, products, isError }) => {
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);

  const handleChanges = () => {
    setCurrPage(1);
  };

  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };
  const otherProps = {
    handleChanges,
    selectHandleFilter,
    currPage,
    setCurrPage,
  };

  let content = null;

  if (isError) {
    content = (
      <div className="pb-80 text-center">
        <ErrorMsg msg="There was an error" />
      </div>
    );
  } else if (!products || products.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  } else {
    let product_items = [...products];

    if (selectValue === "New Added") {
      product_items = products
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (query.category) {
      product_items = product_items.filter(
        (p) => p.category.toLowerCase().split(" ").join("-") === query.category,
      );
    }

    if (query.subcategory) {
      product_items = product_items.filter(
        (p) =>
          p.productType.toLowerCase().replace("&", "").split(" ").join("-") ===
          query.subcategory,
      );
    }

    if (query.color) {
      product_items = product_items.filter(
        (product) =>
          product.goldColor?.toLowerCase().replace(/\s+/g, "-") === query.color,
      );
    }

    content = (
      <>
        <ShopArea
          all_products={products}
          products={product_items}
          otherProps={otherProps}
        />
        <MobileFilter otherProps={otherProps} setCurrPage={setCurrPage} />
      </>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Shop" />
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Shop Grid" subtitle="Shop" />
      {content}
      <Footer />
    </Wrapper>
  );
};

export default CataloguePage;

export const getServerSideProps = async (context) => {
  const { query } = context;
  try {
    const products = await getCatalogueProducts();
    return { props: { query, products, isError: false } };
  } catch (error) {
    console.error(error);
    return { props: { query, products: [], isError: true } };
  }
};
