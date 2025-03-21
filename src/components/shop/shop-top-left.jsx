import { GridTab, ListTab } from "@/svg";
import React, { useState } from "react";

const ShopTopLeft = ({ total, showing = 9, onViewChange }) => {
  const [activeTab, setActiveTab] = useState("grid");

  return (
    <div className="tp-shop-top-left d-flex align-items-center">
      <div className="tp-shop-top-tab tp-tab">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "grid" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("grid");
                onViewChange("grid");
              }}
              type="button"
              role="tab"
              aria-selected={activeTab === "grid"}
            >
              <GridTab />
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "list" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("list");
                onViewChange("list");
              }}
              type="button"
              role="tab"
              aria-selected={activeTab === "list"}
            >
              <ListTab />
            </button>
          </li>
        </ul>
      </div>
      <div className="tp-shop-top-result">
        <p>
          Showing {showing} of {total} results
        </p>
      </div>
    </div>
  );
};

export default ShopTopLeft;
