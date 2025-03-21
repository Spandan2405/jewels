import React, { useState } from "react";
import ProductItem from "../products/fashion/product-item";
import CategoryFilter from "./shop-filter/category-filter";
import ColorFilter from "./shop-filter/color-filter";
import ShopListItem from "./shop-list-item";
import ShopTopLeft from "./shop-top-left";
import ShopTopRight from "./shop-top-right";
import ResetButton from "./shop-filter/reset-button";

const ShopArea = ({ all_products, products, otherProps }) => {
  const { selectHandleFilter, setCurrPage } = otherProps;

  const [pageStart, setPageStart] = useState(0);
  const [countOfPage, setCountOfPage] = useState(all_products.length);
  const [viewMode, setViewMode] = useState("grid");

  // console.log(products);
  return (
    <>
      <section className="tp-shop-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar mr-10">
                {/* categories */}
                <CategoryFilter
                  setCurrPage={setCurrPage}
                  all_products={all_products}
                />
                {/* color */}
                <ColorFilter setCurrPage={setCurrPage} products={products} />

                {/* reset filter */}
                <ResetButton />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-shop-main-wrapper">
                <div className="tp-shop-top mb-45">
                  <div className="row">
                    <div className="col-xl-6">
                      <ShopTopLeft
                        showing={
                          products.length === 0
                            ? 0
                            : products.slice(pageStart, pageStart + countOfPage)
                                .length
                        }
                        total={all_products.length}
                        onViewChange={setViewMode}
                      />
                    </div>
                    <div className="col-xl-6">
                      <ShopTopRight selectHandleFilter={selectHandleFilter} />
                    </div>
                  </div>
                </div>
                {products.length === 0 && <h2>No products found</h2>}
                {products.length > 0 && (
                  <div className="tp-shop-items-wrapper tp-shop-item-primary">
                    <div className="tab-content" id="productTabContent">
                      {viewMode === "grid" ? (
                        <div
                          className="tab-pane fade show active"
                          id="grid-tab-pane"
                          role="tabpanel"
                          aria-labelledby="grid-tab"
                          tabIndex="0"
                        >
                          <div className="row">
                            {products
                              .slice(pageStart, pageStart + countOfPage)
                              .map((item) => (
                                <div
                                  key={item.productID}
                                  className="col-xl-4 col-md-6 col-6"
                                >
                                  <ProductItem
                                    product={item}
                                    key={products.productID}
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <div
                          className="tab-pane fade show active"
                          id="list-tab-pane"
                          role="tabpanel"
                          aria-labelledby="list-tab"
                          tabIndex="0"
                        >
                          <div className="tp-shop-list-wrapper tp-shop-item-primary mb-70">
                            <div className="row">
                              <div className="col-xl-12">
                                {products
                                  .slice(pageStart, pageStart + countOfPage)
                                  .map((item) => (
                                    <ShopListItem
                                      key={item.Product_ID}
                                      product={item}
                                    />
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {products.length > 0 && (
                  <div className="tp-shop-pagination mt-20 col-md-6 col-sm-6">
                    <div className="tp-pagination">
                      {/* <Pagination
                        items={products}
                        countOfPage={all_products.length}
                        paginatedData={paginatedData}
                        currPage={currPage}
                        setCurrPage={setCurrPage}
                      /> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopArea;
