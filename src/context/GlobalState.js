import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const GlobalContext = createContext();

export const authentication = {
  isLoggedin: false,
  onAuthentication() {
    this.isLoggedin = true;
  },
  getLoginStatus() {
    return this.isLoggedin;
  },
};

export const GlobalProvider = (props) => {
  const [islog, setIslog] = useState(false);
  const register = (newuser) => {
    return axios
      .post("http://127.0.0.1:8000/api/register", newuser, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        toast.success("successfully registered");
      })

      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const login = (user) => {
    return axios
      .post(
        "http://127.0.0.1:8000/api/login",
        {
          email: user.email,
          password: user.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        localStorage.setItem("usertoken", response.data.token);
        console.log(response.data.token);

        return response.data.token;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const getProfile = () => {
    return axios
      .get("http://127.0.0.1:8000/api/profile", {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` },
      })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        authentication,
        register,
        login,
        getProfile,
        islog,
        setIslog,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
