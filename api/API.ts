import Environment from "./Environment";

export const URL = Environment.prod ? "" : `https://errand-boy.onrender.com`;

export default {
  // AUTHENTICATION
  register: `${URL}/account/register/`,
  login: `${URL}/account/login/`,
};
