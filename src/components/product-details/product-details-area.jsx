import React, { useState, useEffect } from "react";
import DetailsThumbWrapper from "./details-thumb-wrapper";
import DetailsWrapper from "./details-wrapper";
import FAQs from "@/components/FAQs";

const ProductDetailsArea = ({ productItem }) => {
  const { img, imageLink } = productItem || {};
  const [activeImg, setActiveImg] = useState(img);

  // active image change when img change
  useEffect(() => {
    setActiveImg(img);
  }, [img]);

  // handle image active
  const handleImageActive = (item) => {
    setActiveImg(item);
  };
  return (
    <section className="tp-product-details-area">
      <div className="tp-product-details-top pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              {/* product-details-thumb-wrapper start */}
              <DetailsThumbWrapper
                activeImg={activeImg}
                handleImageActive={handleImageActive}
                imageURLs={imageLink}
                imgWidth={580}
                imgHeight={670}
              />
              {/* product-details-thumb-wrapper end */}
            </div>
            <div className="col-xl-5 col-lg-6">
              {/* product-details-wrapper start */}
              <DetailsWrapper
                productItem={productItem}
                handleImageActive={handleImageActive}
                activeImg={activeImg}
                detailsBottom={true}
              />
              {/* product-details-wrapper end */}
            </div>
          </div>
        </div>
      </div>

      {/* product details description */}
      {
        <div className="tp-product-details-bottom pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <FAQs />
              </div>
            </div>
          </div>
        </div>
      }
      {/* product details description */}
    </section>
  );
};

export default ProductDetailsArea;
