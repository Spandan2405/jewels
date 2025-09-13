import React, { useState } from "react";
import Link from "next/link";
import { mobile_menu } from "@/data/menu-data";

const MobileMenus = ({ setIsCanvasOpen }) => {
  const [activeMenu, setActiveMenu] = useState(""); // main menus
  const [activeSubMenu, setActiveSubMenu] = useState(""); // sub/mega menus

  // Toggle parent menu
  const handleToggleMenu = (menuTitle) => {
    setActiveMenu(activeMenu === menuTitle ? "" : menuTitle);
    setActiveSubMenu(""); // reset submenus when parent closes
  };

  // Toggle sub/mega menu
  const handleToggleSubMenu = (subTitle) => {
    setActiveSubMenu(activeSubMenu === subTitle ? "" : subTitle);
  };

  return (
    <nav className="tp-main-menu-content tp-main-menu-mobile">
      <ul>
        {mobile_menu.map((menu) => (
          <li
            key={menu.id}
            className={`has-dropdown ${
              activeMenu === menu.title ? "dropdown-opened" : ""
            }`}
          >
            {menu.sub_menus ? (
              <>
                {/* Parent menu */}
                <a
                  className={`${activeMenu === menu.title ? "expanded" : ""}`}
                  onClick={() => handleToggleMenu(menu.title)}
                >
                  {menu.title}
                  <button
                    onClick={() => handleToggleMenu(menu.title)}
                    className={`dropdown-toggle-btn ${
                      activeMenu === menu.title ? "dropdown-opened" : ""
                    }`}
                  >
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </button>
                </a>

                {/* Submenu */}
                <ul
                  className={`tp-submenu ${
                    activeMenu === menu.title ? "active" : ""
                  }`}
                >
                  {menu.sub_menus.map((sub, i) => (
                    <li
                      key={i}
                      className={`has-dropdown ${
                        activeSubMenu === sub.title ? "dropdown-opened" : ""
                      }`}
                    >
                      {sub.mega_menus ? (
                        <>
                          {/* Submenu with mega menu */}

                          <div
                            className={`${
                              activeSubMenu === sub.title ? "expanded" : ""
                            }`}
                          >
                            <a href={sub.link} style={{ border: "none" }}>
                              {sub.title}
                            </a>
                            <button
                              onClick={() => handleToggleSubMenu(sub.title)}
                              className={`dropdown-toggle-btn ${
                                activeSubMenu === sub.title
                                  ? "dropdown-opened"
                                  : ""
                              }`}
                            >
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </div>

                          <ul
                            className={`tp-mega-menu ${
                              activeSubMenu === sub.title ? "active" : ""
                            }`}
                          >
                            {sub.mega_menus.map((mega, j) => (
                              <li key={j}>
                                <Link
                                  href={mega.link}
                                  onClick={() => setIsCanvasOpen()}
                                >
                                  {mega.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link href={sub.link} onClick={() => setIsCanvasOpen()}>
                          {sub.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={menu.link} onClick={() => setIsCanvasOpen()}>
                {menu.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
