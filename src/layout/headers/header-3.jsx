import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import logos from "../../../public/assets/img/logo/logos.svg";
import logos from "../../../public/assets/img/logo/logo.svg";
import Bluebar from "./header-com/Bluebar";
import { Menu } from "@/svg";
import Menus from "./header-com/menus";
import useSticky from "@/hooks/use-sticky";
import OffCanvas from "@/components/common/off-canvas";

const HeaderThree = () => {
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { sticky } = useSticky();
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-style-transparent-white tp-header-transparent tp-header-sticky has-dark-logo tp-header-height ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="col-xl-12 text-center">
            <div
              className="tp-header-info"
              style={{
                backgroundColor: "#012f49",
                color: "white",
              }}
            >
              <Bluebar />
            </div>
          </div>
          <div className="tp-header-bottom-3 pl-35 pr-35">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logos}
                        alt="logo"
                        width={150}
                        height={55}
                      />
                      <Image
                        className="logo-dark"
                        src={logos}
                        alt="logo"
                        width={150}
                        height={55}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                  <div className="main-menu menu-style-3 p-relative d-flex align-items-center justify-content-center">
                    <nav className="tp-main-menu-content">
                      <Menus />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="tp-header-action d-flex align-items-center justify-content-end ml-50">
                    <div className="tp-header-action-item d-lg-none">
                      <button
                        onClick={() => setIsCanvasOpen(true)}
                        type="button"
                        className="tp-header-action-btn tp-offcanvas-open-btn"
                      >
                        <Menu />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsCanvasOpen={setIsCanvasOpen}
        categoryType="beauty"
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;
