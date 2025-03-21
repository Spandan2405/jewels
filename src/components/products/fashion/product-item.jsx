import Image from "next/image";
import React from "react";
import { urlFor } from "@/lib/sanity"; // Ensure you have the image URL builder setup in your Sanity client
import Link from "next/link";
// internal

const ProductItem = ({ product, style_2 = false }) => {
  const { productID, productType, img, name } = product || {};
  // console.log(productID, productType, img, name);

  return (
    <div className={`tp-product-item-2 ${style_2 ? "" : "mb-40"}`}>
      <div className="tp-product-thumb-2 ">
        <Link href={`/product-details/${productID}`}>
          {img && (
            <Image
              src={urlFor(img)}
              alt={name || "Product Image"}
              width={284}
              height={302}
            />
          )}
        </Link>
      </div>
      <div className="tp-product-content-2 pt-15">
        <h3 className="tp-product-title-2">
          <Link href={`/product-details/${productID}`}>{name}</Link>
        </h3>
        <div className="tp-product-tag-2">{productType}</div>
      </div>
    </div>
  );
};

export default ProductItem;
