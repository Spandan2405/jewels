// import home_1 from "@public/assets/img/menu/menu-home-1.jpg";
// import home_2 from "@assets/img/menu/menu-home-2.jpg";
// import home_3 from "@assets/img/menu/menu-home-3.jpg";
// import home_4 from "@assets/img/menu/menu-home-4.jpg";

const menu_data = [
  {
    id: 1,
    homes: true,
    title: "Home",
    link: "/shop",
  },
  {
    id: 2,
    products: true,
    title: "Products",
    link: "/shop",
    product_pages: [
      {
        title: "Earings",
        link: "/shop?category=earings",
        mega_menus: [
          { title: "Studs", link: "/shop?subcategory=studs" },
          { title: "Daily Wear", link: "/shop?subcategory=daily-wear" },
          { title: "Drops", link: "/shop?subcategory=drops" },
        ],
      },
      {
        title: "Pendants",
        link: "/shop?category=pendants",
        mega_menus: [
          { title: "Mangalsutra", link: "/shop?subcategory=mangalsutra" },
          {
            title: "Occasional Wear",
            link: "/shop?subcategory=occasional-wear",
          },
          { title: "Everyday Wear", link: "/shop?subcategory=everyday-wear" },
        ],
      },
      {
        title: "Necklaces",
        link: "/shop?category=necklaces",
        mega_menus: [
          {
            title: "Festive Wear",
            link: "/shop?subcategory=festive-wear",
          },
        ],
      },
      {
        title: "Rings",
        link: "/shop?category=rings",
        mega_menus: [
          {
            title: "Engagement Rings",
            link: "/shop?subcategory=engagement-rings",
          },
          { title: "Casual Rings", link: "/shop?subcategory=casual-rings" },
          { title: "Couple Rings", link: "/shop?subcategory=couples-rings" },
          { title: "Bands", link: "/shop?subcategory=bands" },
        ],
      },
      {
        title: "Bangles & Bracelets",
        link: "/shop?category=bracelets",
        mega_menus: [
          {
            title: "Tennis Bracelets",
            link: "/shop?subcategory=tennis-bracelet",
          },
          {
            title: "Diamond Bangles",
            link: "/shop?subcategory=diamond-bangles",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: "About",
    link: "/blog",
    sub_menus: [
      { title: "Our Work", link: "/test" },
      { title: "Testimonials", link: "/test" },
    ],
  },
  {
    id: 4,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: false,
    title: "Home",
    link: "/shop",
  },
  {
    id: 2,
    sub_menu: true,
    title: "Products",
    link: "/shop",
    sub_menus: [
      { title: "Earings", link: "shop?category=earings" },
      { title: "Pendants & Necklaces", link: "shop?category=pendants" },
      { title: "Rings", link: "shop?category=rings" },
      { title: "Bangles", link: "shop?category=bangles" },
      { title: "Bracelets", link: "shop?category=bracelets" },
    ],
  },
  {
    id: 3,
    sub_menu: false,
    title: "Shop",
    link: "/shop",
  },
  {
    id: 4,
    sub_menu: true,
    title: "About",
    link: "/blog",
    sub_menus: [
      { title: "Our Work", link: "/test" },
      { title: "Testimonials", link: "/test" },
    ],
  },
  {
    id: 5,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];
