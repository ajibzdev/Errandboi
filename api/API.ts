import Environment from "./Environment";

export const URL = Environment.prod ? "" : `https://errand-boy.onrender.com`;

export default {
  // AUTHENTICATION
  register: `${URL}/account/register/`,
  faceRegister: `${URL}/account/register-face/`,

  login: `${URL}/account/login/`,
  logout: `${URL}/account/logout/`,
  faceLogin: `${URL}/account/face-login/`,

  // User
  getUserDetails: `${URL}/account/profile/`,

  // Food service
  foodService: `${URL}/foodservice/`,
  allFoodService: `${URL}/foodservice/all/`,
  registerFoodService: `${URL}/foodservice/register/`,

  // Product
  addProduct: `${URL}/product/add-product/`,
  myProduct: `${URL}/product/myproducts/`,
  getProduct: `${URL}/product/`,
  allProduct: `${URL}/product/all/`,

  // Category
  addCategory: `${URL}/product/add-category/`,
  getCategory: `${URL}/product/category/`,
};
