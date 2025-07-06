import React, { useEffect, useState } from "react";
import DetailsBottomInfo from "./details-bottom-info";
import { notifyError, notifySuccess, ToastContainer } from "@/utils/toast"; // Import ToastContainer
import Share from "@/svg/share";

const DetailsWrapper = ({ productItem, detailsBottom = false }) => {
  const { productType, productDescription, name } = productItem || {};
  const [textMore, setTextMore] = useState(false);
  const [productURL, setProductURL] = useState("");

  useEffect(() => {
    setProductURL(window.location.href);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(productURL); // Ensure this is awaited
      notifySuccess("Link copied to clipboard!");
    } catch (error) {
      notifyError("Error sharing link");
      console.error("Sharing error:", error);
    }
  };

  return (
    <div className="tp-product-details-wrapper">
      {/* Add ToastContainer Here */}
      <ToastContainer />

      <div
        className="w-full d-flex"
        style={{ justifyContent: "space-between" }}
      >
        <h3 className="tp-product-details-title">{name}</h3>
        <button onClick={handleShare} className="tp-product-details-social">
          <Share />
        </button>
      </div>

      <h4 className="tp-product-details-variation-title">
        Type: <span>{productType}</span>
      </h4>
      {/* <p>
        {textMore
          ? productDescription
          : `${productDescription?.substring(0, 100)}...`}
        <span onClick={() => setTextMore(!textMore)}>
          {textMore ? " See less" : " See more"}
        </span>
      </p> */}

      {/* <div className="tp-product-details-variation d-flex">
        <div className="tp-product-details-variation-item">
          <h4 className="tp-product-details-variation-title">Color </h4>
          <div className="tp-product-details-variation-list">
            <button type="button" className="color tp-color-variation-btn">
              <span
                data-bg-color={goldColor}
                style={{
                  backgroundColor:
                    goldColor === "yellow"
                      ? "#BBA14F"
                      : goldColor === "rose"
                      ? "#B76E79"
                      : "#FFFFF4",
                }}
              ></span>
              <br />
              <span>
                {goldColor.split("")[0].toUpperCase() + goldColor.slice(1)}
              </span>
            </button>
          </div>
        </div>
        <div className="tp-product-details-variation-item d-flex mx-5">
          <h4 className="tp-product-details-variation-title mx-2">
            Type: <span>{productType}</span>
          </h4>
        </div>
      </div> */}

      {detailsBottom && (
        <DetailsBottomInfo tag={productType} product={productItem} />
      )}
    </div>
  );
};

export default DetailsWrapper;
