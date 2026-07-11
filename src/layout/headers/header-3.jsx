import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logos from "../../../public/assets/img/logo/logos.svg";
import { Menu } from "@/svg";
import useSticky from "@/hooks/use-sticky";
import OffCanvas from "@/components/common/off-canvas";
import homeHeaderMenu, { homeHeaderCta } from "@/data/home-header-menu";

const HeaderThree = () => {
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { sticky } = useSticky();

  return (
    <>
      <header className="rs-site-header">
        <div
          id="header-sticky"
          className={`rs-site-header__bar ${
            sticky ? "header-sticky" : ""
          }`}
        >
          <div className="rs-site-header__shell">
            <div className="rs-site-header__inner">
              <div className="rs-site-header__brand">
                <Link href="/" aria-label="RareStonz home">
                  <Image
                    src={logos}
                    alt="RareStonz"
                    width={264}
                    height={80}
                    priority
                  />
                </Link>
              </div>

              <nav
                className="rs-site-header__nav d-none d-lg-flex"
                aria-label="Primary"
              >
                <ul className="rs-site-header__menu">
                  {homeHeaderMenu.map((item) => (
                    <li
                      key={item.id}
                      className={item.sub_menus?.length ? "has-dropdown" : ""}
                    >
                      <Link href={item.link}>{item.title}</Link>
                      {item.sub_menus?.length ? (
                        <ul className="rs-site-header__submenu">
                          {item.sub_menus.map((subItem) => (
                            <li key={`${item.id}-${subItem.title}`}>
                              <Link href={subItem.link}>{subItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="rs-site-header__actions">
                <Link
                  href={homeHeaderCta.link}
                  className="rs-site-header__cta d-none d-lg-inline-flex"
                >
                  {homeHeaderCta.label}
                </Link>
                <button
                  onClick={() => setIsCanvasOpen(true)}
                  type="button"
                  className="rs-site-header__menu-btn d-lg-none"
                  aria-label="Open menu"
                >
                  <Menu />
                </button>
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
        menuItems={homeHeaderMenu}
        cta={homeHeaderCta}
        className="rs-offcanvas"
      />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;
