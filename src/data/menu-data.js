// import home_1 from "@public/assets/img/menu/menu-home-1.jpg";
// import home_2 from "@assets/img/menu/menu-home-2.jpg";
// import home_3 from "@assets/img/menu/menu-home-3.jpg";
// import home_4 from "@assets/img/menu/menu-home-4.jpg";

const menu_data = [
  {
    id: 1,
    homes: true,
    title: "Home",
    link: "/",
    home_pages: [
      // {
      //   img: home_1,
      //   title: "Electronics",
      //   link: "/",
      // },
      // {
      //   img: home_2,
      //   title: "Fashion",
      //   link: "/home-2",
      // },
      // {
      //   img: home_3,
      //   title: "Beauty",
      //   link: "/home-3",
      // },
      // {
      //   img: home_4,
      //   title: "Jewelry",
      //   link: "/home-4",
      // },
    ],
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
          { title: "Studs", link: "shop?subcategory=studs" },
          { title: "Daily Wear", link: "shop?subcategory=daily-wear" },
          { title: "Drops", link: "shop?subcategory=drops" },
        ],
      },
      {
        title: "Pendants",
        link: "/shop?category=pendants",
        mega_menus: [
          { title: "Mangalsutra", link: "shop?subcategory=mangalsutra" },
          {
            title: "Occasional Wear",
            link: "shop?subcategory=occasional-wear",
          },
          { title: "Everyday Wear", link: "shop?subcategory=everyday-wear" },
          // { title: "Variations Swatches", link: "/product-details-swatches" },
        ],
      },
      {
        title: "Rings",
        link: "shop?category=rings",
        mega_menus: [
          {
            title: "Engagement Rings",
            link: "shop?subcategory=engagement-rings",
          },
          { title: "Casual Rings", link: "shop?subcategory=casual-rings" },
          { title: "Couple Rings", link: "shop?subcategory=couples-rings" },
          // { title: "X Rings", link: "/checkout" },
          // { title: "X Rings", link: "/profile" },
        ],
      },
      {
        title: "Bangles & Bracelets",
        link: "shop?category=bracelets",
        mega_menus: [
          {
            title: "Tennis Bracelets",
            link: "shop?subcategory=tennis-bracelet",
          },
          {
            title: "Diamond Bangles",
            link: "shop?subcategory=diamond-bangles",
          },
          // { title: "X Bangles", link: "/forgot" },
          // { title: "X Bangles", link: "/404" },
        ],
      },
      // {
      //   title: "Unique products",
      //   link: "/shop",
      //   mega_menus: [
      //     { title: "X Unique", link: "/login" },
      //     { title: "X Unique", link: "/register" },
      //     { title: "X Unique", link: "/forgot" },
      //     // { title: "X Bangles", link: "/404" },
      //   ],
      // },
    ],
  },
  {
    id: 3,
    sub_menu: false,
    title: "Shop",
    link: "/shop",
    sub_menus: [
      // { title: "Shop", link: "/shop" },
      // { title: "Right Sidebar", link: "/shop-right-sidebar" },
      // { title: "Hidden Sidebar", link: "/shop-hidden-sidebar" },
    ],
  },
  // {
  //   id: 4,
  //   single_link: true,
  //   title: "Coupons",
  //   link: "/coupon",
  // },
  {
    id: 4,
    sub_menu: true,
    title: "About",
    link: "/blog",
    sub_menus: [
      { title: "Our Work", link: "/test" },
      { title: "Testimonials", link: "/test" },
      // { title: "Blog List", link: "/blog-list" },
      // { title: "Blog Details", link: "/blog-details" },
      // { title: "Blog Details Full Width", link: "/blog-details-2" },
    ],
  },
  {
    id: 5,
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
    link: "/",
  },
  {
    id: 2,
    sub_menu: true,
    title: "Products",
    link: "/shop",
    sub_menus: [
      { title: "Earings", link: "/shop?category=earings" },
      { title: "Pendants", link: "/shop?category=pendants" },
      { title: "Rings", link: "/shop?category=rings" },
      { title: "Bangles", link: "/shop?category=bangles" },
      { title: "Bracelets", link: "/shop?category=bracelets" },
      // { title: "Product Simple", link: "/product-details" },
      // { title: "With Video", link: "/product-details-video" },
      // { title: "With Countdown Timer", link: "/product-details-countdown" },
      // { title: "Variations Swatches", link: "/product-details-swatches" },
    ],
  },
  {
    id: 3,
    sub_menu: false,
    title: "Shop",
    link: "/shop",
    sub_menus: [
      // { title: "Shopping Cart", link: "/cart" },
      // { title: "Compare", link: "/compare" },
      // { title: "Wishlist", link: "/wishlist" },
      // { title: "Checkout", link: "/checkout" },
      // { title: "My account", link: "/profile" },
    ],
  },
  // {
  //   id: 4,
  //   sub_menu: true,
  //   title: "More Pages",
  //   link: "/login",
  //   sub_menus: [
  //     { title: "Login", link: "/login" },
  //     { title: "Register", link: "/register" },
  //     { title: "Forgot Password", link: "/forgot" },
  //     { title: "404 Error", link: "/404" },
  //   ],
  // },
  // {
  //   id: 4,
  //   single_link: true,
  //   title: "Coupons",
  //   link: "/coupon",
  // },
  {
    id: 4,
    sub_menu: true,
    title: "About",
    link: "/blog",
    sub_menus: [
      { title: "Our Work", link: "/test" },
      { title: "Testimonials", link: "/test" },
      // { title: "Blog List", link: "/blog-list" },
      // { title: "Blog Details", link: "/blog-details" },
      // { title: "Blog Details Full Width", link: "/blog-details-2" },
    ],
  },
  {
    id: 5,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];
