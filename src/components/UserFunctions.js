import axios from "axios";

export const register = (newuser) => {
  return axios
    .post("api/register", newuser, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
