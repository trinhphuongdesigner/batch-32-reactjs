export const DEFAULT = {
  TOKEN: "TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const LOCATION = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  IMAGE: "/images",
  PRODUCT: "/products",
  PRODUCT_DETAIL: "/products/:id",
  PLAY_LIST: "/play-list",
  CART_EMPLOYEE: "/cart-employee",
  CART_MANAGER: "/cart-manager",
  BUTTON_ACCORDION: "/button-accordion",
  FORM: "/form",
  DEMO: "/demo",
};

export const NON_AUTH = [
  {
    path: LOCATION.LOGIN,
    title: "Đăng nhập",
  },
  {
    path: LOCATION.REGISTER,
    title: "Đăng ký",
  },
];

export const AUTH = [
  {
    path: LOCATION.IMAGE,
    title: "Hình ảnh",
  },
  {
    path: LOCATION.PRODUCT,
    title: "Sản phẩm",
  },
  {
    path: LOCATION.PLAY_LIST,
    title: "Bài hát",
  },
  {
    path: LOCATION.CART_EMPLOYEE,
    title: "Nhân viên",
  },
  {
    path: LOCATION.CART_MANAGER,
    title: "Quản lý",
  },
  {
    path: LOCATION.BUTTON_ACCORDION,
    title: "Thẻ",
  },
  {
    path: LOCATION.FORM,
    title: "Form",
  },
]
