import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mobile_menu } from "@/data/menu-data";

const MobileMenus = ({ setIsCanvasOpen }) => {
  const [isActiveMenu, setIsActiveMenu] = useState("");

  // handleOpenSubMenu
  const handleOpenSubMenu = (title) => {
    if (title === isActiveMenu) {
      setIsActiveMenu("");
    } else {
      setIsActiveMenu(title);
    }
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        {mobile_menu.map((menu, i) => (
          <ul key={i}>
            {menu.sub_menu ? (
              <li
                key={menu.id}
                className={`has-dropdown ${
                  isActiveMenu === menu.title ? "dropdown-opened" : ""
                }`}
              >
                <a
                  className={`${isActiveMenu === menu.title ? "expanded" : ""}`}
                  onClick={() => handleOpenSubMenu(menu.title)}
                >
                  {menu.title}
                  <button
                    onClick={() => handleOpenSubMenu(menu.title)}
                    className={`dropdown-toggle-btn ${
                      isActiveMenu === menu.title ? "dropdown-opened" : ""
                    }`}
                  >
                    <i class="fa fa-angle-down" aria-hidden="true" />
                  </button>
                </a>
                <ul
                  className={`tp-submenu ${
                    isActiveMenu === menu.title ? "active" : ""
                  }`}
                >
                  {menu.sub_menus.map((b, i) => (
                    <li key={i}>
                      <Link href={b.link} onClick={() => setIsCanvasOpen()}>
                        {b.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={menu.id} onClick={() => setIsCanvasOpen()}>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            )}
          </ul>
        ))}
      </nav>
    </>
  );
};

export default MobileMenus;
