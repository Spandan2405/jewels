import React, { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import ErrorMsg from "@/components/common/error-msg";
import Footer from "@/layout/footers/footer";
import ShopLoader from "@/components/loader/shop/shop-loader";
import { getProducts } from "@/lib/fetchData";
import MobileFilter from "@/components/shop/MobileFilter";

const ShopPage = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const Rings = await getProducts();
        setProducts(Rings);
        // setFilteredProducts(Rings);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // handleChanges
  const handleChanges = () => {
    setCurrPage(1);
  };

  // selectHandleFilter
  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };
  const otherProps = {
    handleChanges,
    selectHandleFilter,
    currPage,
    setCurrPage,
  };

  // console.log(products);
  let content = null;

  if (isLoading) {
    content = <ShopLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = (
      <div className="pb-80 text-center">
        <ErrorMsg msg="There was an error" />
      </div>
    );
  }
  if (!isLoading && !isError && products?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products.length > 0) {
    // products
    let product_items = products;
    // select short filtering
    if (selectValue) {
      if (selectValue === "Default Sorting") {
        product_items = products;
      } else if (selectValue === "New Added") {
        product_items = products
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // console.log(product_items);
      } else {
        product_items = products;
      }
    }

    // category filter
    if (query.category) {
      product_items = product_items.filter(
        (p) => p.category.toLowerCase().split(" ").join("-") === query.category
      );
      // console.log(product_items);
    }

    // category filter
    if (query.subcategory) {
      product_items = product_items.filter(
        (p) =>
          p.productType.toLowerCase().replace("&", "").split(" ").join("-") ===
          query.subcategory
      );
    }

    // color filter
    if (query.color) {
      product_items = product_items.filter(
        (product) => product.goldColor === query.color
      );
      // console.log(product_items);
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

export default ShopPage;

export const getServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: { query },
  };
};
