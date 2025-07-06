import React, { useRef, useEffect } from "react";

const DetailsTabNav = ({ product }) => {
  const {
    goldColor,
    grossWeight,
    goldPurity,
    diamondClarity,
    diamondColor,
    noDiamonds,
    diamondWeight,
    metalType,
  } = product || {};

  return (
    <div className="tp-product-details-additional-info">
      <div className="row">
        <div className="col-xl-10">
          <table>
            <tbody>
              {/* Gold Section */}

              <th colSpan={2} style={{ textAlign: "left", paddingTop: "1rem" }}>
                Metal
              </th>
              <tr>
                <td>Type</td>
                <td>{metalType}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>
                  <div className="tp-product-details-variation-list">
                    <button
                      type="button"
                      className="color tp-color-variation-btn"
                    >
                      <span
                        data-bg-color={goldColor}
                        style={{
                          backgroundColor:
                            goldColor === "yellow"
                              ? "#BBA14F"
                              : goldColor === "rose"
                              ? "#B76E79"
                              : "#C0C0C0",
                        }}
                      ></span>
                      {
                        <span className="tp-color-variation-tootltip">
                          {goldColor.split("")[0].toUpperCase() +
                            goldColor.slice(1)}
                        </span>
                      }
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Gross Weight</td>
                <td>{grossWeight} g</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>{goldPurity}</td>
              </tr>

              {/* Diamond Section */}

              <th colSpan={2} style={{ textAlign: "left", paddingTop: "1rem" }}>
                Stone
              </th>

              <tr>
                <td>Clarity</td>
                <td>{diamondClarity}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>{diamondColor}</td>
              </tr>
              <tr>
                <td>No of Diamonds</td>
                <td>{noDiamonds}</td>
              </tr>
              <tr>
                <td>Total Weight</td>
                <td>{diamondWeight} CT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsTabNav;
