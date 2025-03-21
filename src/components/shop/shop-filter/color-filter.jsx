import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ErrorMsg from "@/components/common/error-msg";
import ShopColorLoader from "@/components/loader/shop/color-filter-loader";
import { client } from "@/lib/sanity";
// Import Sanity client

const ColorFilter = ({ setCurrPage, shop_right = false, products }) => {
  const router = useRouter();
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch Colors from Sanity
  useEffect(() => {
    const fetchColors = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "product"]{goldColor}`;
        const data = await client.fetch(query);

        if (!data || data.length === 0) {
          setIsLoading(false);
          return;
        }

        // Extract unique colors with counts
        const colorCount = {};
        data.forEach(({ goldColor }) => {
          if (goldColor) {
            colorCount[goldColor] = (colorCount[goldColor] || 0) + 1;
          }
        });

        setColors(
          Object.entries(colorCount).map(([color, count]) => ({ color, count }))
        );
      } catch (error) {
        console.error("Error fetching colors from Sanity:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchColors();
  }, []);

  // Handle Color Selection
  const handleColor = (clr) => {
    setCurrPage(1);
    router.push(
      `/${shop_right ? "shop-right-sidebar" : "shop"}?color=${clr
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
  };

  // Render Content
  let content = null;

  if (isLoading) {
    content = <ShopColorLoader loading={isLoading} />;
  } else if (isError) {
    content = <ErrorMsg msg="There was an error fetching colors" />;
  } else if (products?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  } else if (products?.length > 0) {
    content = colors.map((item, i) => (
      <li key={i}>
        <div className="tp-shop-widget-checkbox-circle">
          <input
            type="checkbox"
            id={item.color}
            checked={router.query.color === item.color ? "checked" : false}
            readOnly
          />
          <label onClick={() => handleColor(item.color)} htmlFor={item.color}>
            {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
          </label>
          <span
            style={{
              backgroundColor:
                item.color !== "white"
                  ? item.color === "yellow"
                    ? "#BBA14F"
                    : "#B76E79"
                  : "#C0C0C0",
            }}
            className="tp-shop-widget-checkbox-circle-self border-gray-900"
          ></span>
        </div>
        <span
          className="tp-shop-widget-checkbox-circle-number"
          onClick={() => handleColor(item.color)}
        >
          {item.count}
        </span>
      </li>
    ));
  }

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Filter by Color</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-checkbox-circle-list">
          <ul>{content}</ul>
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
