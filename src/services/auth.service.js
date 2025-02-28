import axios from "axios";

import { jwtDecode } from "jwt-decode";

const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => callback(true, res.data.token))
    .catch((error) => callback(false, error));
};

const getUsername = (token) => {
  const user = jwtDecode(token);
  return user.user;
};

export { login, getUsername };
