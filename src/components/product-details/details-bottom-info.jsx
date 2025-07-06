import React from "react";
import Image from "next/image";
// import payment_option_img from "@assets/img/product/icons/payment-option.png";
import DetailsTabNav from "./details-tab-nav";

const DetailsBottomInfo = ({ tag, product }) => {
  return (
    <>
      <div className="tp-product-details-bottom pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <DetailsTabNav product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBottomInfo;
