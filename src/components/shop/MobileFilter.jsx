import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useState } from "react";
import { useClickAway } from "react-use";

const MobileFilter = ({ otherProps, setCurrPage }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();
  const [sortOption, setSortOption] = useState("Default Sorting");
  const { selectHandleFilter } = otherProps;
  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsSortOpen(false);
    setIsFilterOpen(false);
  });

  const sortOptions = [
    { label: "Default", value: "Default Sorting" },
    { label: "Newest Arrivals", value: "New Added" },
  ];
  const handleCategoryRoute = (title) => {
    setCurrPage(1);
    router.push(
      `/shop?category=${title
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
    setIsFilterOpen(false);
  };
  const handleColor = (clr) => {
    setCurrPage(1);
    router.push(
      `/shop?color=${clr.toLowerCase().replace("&", "").split(" ").join("-")}`
    );
    setIsFilterOpen(false);
  };
  const handleReset = () => {
    setCurrPage(1);
    router.push(`/shop`);
    setIsFilterOpen(false);
  };

  return (
    <div className="mobile-sort-filter d-sm-block d-md-block d-lg-none d-xl-none">
      <div className="sort-filter-toggle">
        <button onClick={() => setIsSortOpen(true)} className="sort">
          ⇅ SORT
        </button>
        <button onClick={() => setIsFilterOpen(true)} className="filter">
          ≡ FILTER
        </button>
      </div>

      {isSortOpen && (
        <div className="overlay">
          <div className="popup" ref={ref}>
            <h4>SORT BY </h4>
            <div className="labels">
              {sortOptions.map((item) => (
                <button
                  key={item.value}
                  data-value={item.value}
                  className={`label ${
                    sortOption === item.value ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSortOption(item.value);
                    selectHandleFilter(item, item.label);
                    setIsSortOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* (
        <div className="overlay">
          <div className="popup">
            <h4>SORT BY</h4>
            <div className="labels">
              <button
                className={sortOption === "default" ? "selected" : ""}
                onClick={() => handleApply("default")}
              >
                Default
              </button>
              <button
                name="sort"
                value="new"
                className={sortOption === "new" ? "selected" : ""}
                onClick={() => handleApply("new")}
              >
                Newly Added
              </button>
            </div>
            <div className="action-btns">
              <button onClick={() => setIsSortOpen(false)}>Close</button>
              <button onClick={handleApply}>Apply</button>
            </div>
          </div>
        </div>
      ) */}

      {isFilterOpen && (
        <div className="overlay">
          <div className="popup" ref={ref}>
            <h4>FILTERS</h4>
            <div className="filter-group">
              <h5>Color</h5>
              {["Yellow", "Rose", "White"].map((color) => (
                <button onClick={() => handleColor(color)}>
                  <span>
                    <i class="fa-solid fa-check"></i>
                  </span>
                  {color}
                </button>
              ))}
            </div>
            <div className="filter-group">
              <h5>Category</h5>
              {["Pendants", "Rings", "Bracelets", "Earings"].map((cat) => (
                <button onClick={() => handleCategoryRoute(cat)}>
                  <span>
                    <i class="fa-solid fa-check"></i>
                  </span>
                  {cat}
                </button>
              ))}
            </div>
            <div className="filter-group">
              <button
                onClick={() => handleReset()}
                className="selected text-center"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilter;
