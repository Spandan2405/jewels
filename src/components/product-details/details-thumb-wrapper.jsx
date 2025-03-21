import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState, useEffect } from "react";

const DetailsThumbWrapper = ({
  imageURLs,
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
}) => {
  // console.log(imageURLs);
  return (
    <>
      <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
        <nav>
          <div className="nav nav-tabs flex-sm-column">
            {imageURLs?.map((item, i) => (
              <button
                key={i}
                className={`nav-link ${item.i === activeImg ? "active" : ""}`}
                onClick={() => handleImageActive(item)}
              >
                <Image
                  src={item}
                  alt="image"
                  width={78}
                  height={100}
                  style={{ width: "100%", height: "100%" }}
                />
              </button>
            ))}
          </div>
        </nav>
        <div className="tab-content m-img">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb p-relative">
              <Image
                src={urlFor(activeImg)}
                alt="product img"
                width={imgWidth}
                height={imgHeight}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsThumbWrapper;
