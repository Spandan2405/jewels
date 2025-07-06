import React from "react";
import { useRouter } from "next/router";

const ColorFilter = ({ setCurrPage, shop_right = false, products }) => {
  const router = useRouter();

  // Extract color counts from current product list
  const colorCount = {};
  products?.forEach(({ goldColor }) => {
    if (goldColor) {
      colorCount[goldColor] = (colorCount[goldColor] || 0) + 1;
    }
  });

  const colors = Object.entries(colorCount).map(([color, count]) => ({
    color,
    count,
  }));

  // Handle Color Selection
  const handleColor = (clr) => {
    // setCurrPage(1);
    router.push({
      pathname: "/shop",
      query: {
        ...router.query, // keep existing filters (like category)
        color: clr.toLowerCase().replace("&", "").split(" ").join("-"),
      },
    });
  };

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Filter by Color</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-checkbox-circle-list">
          <ul>
            {colors.map((item, i) => (
              <li
                key={i}
                className={`
                  ${router.query.color === item.color ? " active" : ""}`}
              >
                <div className="tp-shop-widget-checkbox-circle">
                  <input
                    type="checkbox"
                    id={item.color}
                    checked={router.query.color === item.color}
                    readOnly
                  />
                  <label
                    onClick={() => handleColor(item.color)}
                    htmlFor={item.color}
                  >
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
                  className={`tp-shop-widget-checkbox-circle-number`}
                  onClick={() => handleColor(item.color)}
                >
                  {item.count}
                </span>
              </li>
            ))}
            {colors.length === 0 && (
              <li>
                <p>No matching colors found in this view.</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
