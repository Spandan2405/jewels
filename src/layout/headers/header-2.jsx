import React, { useState } from "react";
import Link from "next/link";
// internal
import Menus from "./header-com/menus";
// import logos from "@assets/img/logo/logos.svg";
import logos from "@assets/img/logo/logo.svg";
import useSticky from "@/hooks/use-sticky";
import { Menu } from "@/svg";
import OffCanvas from "@/components/common/off-canvas";
import Image from "next/image";

const HeaderTwo = ({ style_2 = false }) => {
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { sticky } = useSticky();

  return (
    <>
      <header>
        <div
          className={`tp-header-area tp-header-style-${
            style_2 ? "primary" : "darkRed"
          } tp-header-height`}
        >
          <div
            id="header-sticky"
            className={`tp-header-bottom-2 tp-header-sticky ${
              sticky ? "header-sticky" : ""
            }`}
          >
            <div className="container">
              <div className="tp-mega-menu-wrapper p-relative">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-2 col-lg-3 col-md-5 col-sm-4 col-6">
                    <div className="logo">
                      <Link href="/shop">
                        <Image
                          src={logos}
                          alt="logo"
                          priority
                          className="object-cover"
                          // height={55}
                          // width={150}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-9 d-lg-block d-none d-xl-block text-center">
                    <div className="main-menu menu-style-2">
                      <nav className="tp-main-menu-content">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="tp-header-action d-flex align-items-center justify-content-end">
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
        </div>
      </header>

      {/* off canvas start */}
      <OffCanvas
        isOffCanvasOpen={isOffCanvasOpen}
        setIsCanvasOpen={setIsCanvasOpen}
        categoryType="fashion"
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderTwo;
