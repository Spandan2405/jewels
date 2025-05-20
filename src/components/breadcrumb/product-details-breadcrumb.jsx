import React from "react";
import { useRouter } from "next/router";
import { ArrowRight } from "@/svg";

const ProductDetailsBreadcrumb = ({ category, title }) => {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path); // replaces the current URL in browser history
  };
  return (
    <section className="breadcrumb__area breadcrumb__style-2 include-bg pt-30 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <div className="breadcrumb__list has-icon">
                {/* <span className="breadcrumb-icon">
                  <SmDot />{" "}
                </span> */}
                <span
                  className="breadcrumb__link"
                  onClick={() => handleRedirect("/")}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </span>
                <span>
                  <ArrowRight />
                </span>
                <span
                  className="breadcrumb__link"
                  onClick={() =>
                    handleRedirect(
                      `/shop?subcategory=${category
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  {category}
                </span>
                <span>
                  <ArrowRight />
                </span>
                <span style={{ textDecoration: "none" }}>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsBreadcrumb;
