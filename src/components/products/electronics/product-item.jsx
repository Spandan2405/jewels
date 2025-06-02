import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { Rating } from "react-simple-star-rating";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
// internal
import { Cart, QuickView, Wishlist } from "@/svg";
const ProductItem = ({ product, offer_style = false }) => {
  const {
    _id,
    img,
    category,
    title,
    reviews,
    price,
    discount,
    status,
    offerDate,
  } = product || {};
  // console.log(status);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`${
          offer_style ? "tp-product-offer-item" : "mb-25"
        } tp-product-item transition-3`}
      >
        <div className="tp-product-thumb p-relative fix">
          <Link href={`/product-details/${_id}`}>
            <Image
              src={img}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="product-electronic"
            />
          </Link>

          {/*  product action */}
          <div className="tp-product-action">
            <div className="tp-product-action-item d-flex flex-column">
              {isAddedToCart ? (
                <Link
                  href="/cart"
                  className={`tp-product-action-btn ${
                    isAddedToCart ? "active" : ""
                  } tp-product-add-cart-btn`}
                >
                  {/* <Cart /> <span className="tp-product-tooltip">View Cart</span> */}
                </Link>
              ) : (
                <button
                  onClick={() => handleAddProduct(product)}
                  type="button"
                  className={`tp-product-action-btn ${
                    isAddedToCart ? "active" : ""
                  } tp-product-add-cart-btn`}
                  disabled={status === "out-of-stock"}
                >
                  <Cart />

                  <span className="tp-product-tooltip">Add to Cart</span>
                </button>
              )}
              <button
                onClick={() => dispatch(handleProductModal(product))}
                type="button"
                className="tp-product-action-btn tp-product-quick-view-btn"
              >
                <QuickView />

                <span className="tp-product-tooltip">Quick View</span>
              </button>
              <button
                type="button"
                className={`tp-product-action-btn ${
                  isAddedToWishlist ? "active" : ""
                } tp-product-add-to-wishlist-btn`}
                onClick={() => handleWishlistProduct(product)}
                disabled={status === "out-of-stock"}
              >
                <Wishlist />
                <span className="tp-product-tooltip">Add To Wishlist</span>
              </button>
            </div>
          </div>
        </div>
        {/*  product content */}
        <div className="tp-product-content">
          <div className="tp-product-category">
            <a href="#">{category?.name}</a>
          </div>
          <h3 className="tp-product-title">
            <Link href={`/product-details/${_id}`}>{title}</Link>
          </h3>
          <div className="tp-product-rating d-flex align-items-center">
            <div className="tp-product-rating-icon">
              <Rating
                allowFraction
                size={16}
                initialValue={ratingVal}
                readonly={true}
              />
            </div>
            <div className="tp-product-rating-text">
              <span>
                ({reviews && reviews.length > 0 ? reviews.length : 0} Review)
              </span>
            </div>
          </div>
          <div className="tp-product-price-wrapper">
            {discount > 0 ? (
              <>
                <span className="tp-product-price old-price">${price}</span>
                <span className="tp-product-price new-price">
                  {" "}
                  $
                  {(
                    Number(price) -
                    (Number(price) * Number(discount)) / 100
                  ).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="tp-product-price new-price">
                ${parseFloat(price).toFixed(2)}
              </span>
            )}
          </div>
          {offer_style && (
            <div className="tp-product-countdown">
              <div className="tp-product-countdown-inner">
                {dayjs().isAfter(offerDate?.endDate) ? (
                  <ul>
                    <li>
                      <span>{0}</span> Day
                    </li>
                    <li>
                      <span>{0}</span> Hrs
                    </li>
                    <li>
                      <span>{0}</span> Min
                    </li>
                    <li>
                      <span>{0}</span> Sec
                    </li>
                  </ul>
                ) : (
                  <Timer expiryTimestamp={new Date(offerDate?.endDate)} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
