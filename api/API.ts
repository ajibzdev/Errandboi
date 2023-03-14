import Environment from "./Environment";

export const URL = Environment.prod ? "" : `https://errand-boy.onrender.com`;

export default {
  // AUTHENTICATION
  register: `${URL}/account/register/`,
  faceRegister: `${URL}/account/register-face/`,

  login: `${URL}/account/login/`,
  faceLogin: `${URL}/account/face-login/`,

  logout: `${URL}/account/logout/`,
};
