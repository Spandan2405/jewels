const homeHeaderMenu = [
  {
    id: "about",
    title: "About",
    link: "/#about",
    sub_menus: [
      { title: "Our Story", link: "/#about" },
      { title: "Testimonials", link: "/#about" },
    ],
  },
  {
    id: "process",
    title: "Process",
    link: "/#process",
  },
  {
    id: "products",
    title: "Products",
    link: "/shop",
    sub_menus: [
      { title: "Earrings", link: "/shop?category=earings" },
      { title: "Pendants", link: "/shop?category=pendants" },
      { title: "Necklaces", link: "/shop?category=necklaces" },
      { title: "Rings", link: "/shop?category=rings" },
      { title: "Bracelets", link: "/shop?category=bracelets" },
    ],
  },
  {
    id: "gallery",
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
];

export const homeHeaderCta = {
  label: "Begin Your Journey",
  link: "/#begin-journey",
};

export default homeHeaderMenu;
