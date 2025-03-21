import React from "react";
import { useRouter } from "next/router";

const CategoryFilter = ({ setCurrPage, shop_right = false, all_products }) => {
  const router = useRouter();

  let content = null;
  // handle category route
  const handleCategoryRoute = (title) => {
    setCurrPage(1);
    router.push(
      `/${shop_right ? "shop-right-sidebar" : "shop"}?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };
  // decide what to render

  if (all_products.length > 0) {
    // Create a Map to store unique categories
    const categoryMap = new Map();

    all_products.forEach((product) => {
      if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, {
          category: product.category,
          count: 0,
        });
      }
      categoryMap.get(product.category).count += 1;
    });

    content = Array.from(categoryMap.entries()).map(([category, data]) => (
      <li key={category}>
        <a
          onClick={() => handleCategoryRoute(category)}
          style={{ cursor: "pointer" }}
          className={router.query.category === data.category ? "active" : ""}
        >
          {data.category}
          <span>{data.count}</span>
        </a>
      </li>
    ));
  }

  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Categories</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-categories">
            <ul>{content}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
