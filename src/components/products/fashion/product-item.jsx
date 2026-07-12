import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

const ProductItem = ({ product, style_2 = false }) => {
  const { productID, productType, img, name } = product || {};

  return (
    <div className={`tp-product-item-2 ${style_2 ? "" : "mb-40"}`}>
      <div className="tp-product-thumb-2 ">
        <Link href={`/product-details/${productID}`}>
          {img && (
            <Image
              src={urlFor(img, { width: 568, quality: 75 })}
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
        <div className="tp-product-tag-2">
          <Link
            href={`/shop?subcategory=${productType
              .toLowerCase()
              .split(" ")
              .join("-")}`}
          >
            {productType}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
