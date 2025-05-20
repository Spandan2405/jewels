import { useRouter } from "next/router";
import React from "react";
import { ArrowRight } from "@/svg";

const ShopBreadcrumb = ({ title, subtitle }) => {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path); // replaces the current URL in browser history
  };

  return (
    <section className="breadcrumb__area include-bg pt-50 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <div className="breadcrumb__list d-flex align-items-center gap-2">
                <button
                  className="breadcrumb__link"
                  onClick={() => handleRedirect("/")}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </button>

                <span>
                  <ArrowRight />
                </span>

                <span
                  className="breadcrumb__link"
                  style={{ cursor: "pointer" }}
                >
                  {subtitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBreadcrumb;
