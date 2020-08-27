import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authentication, login, islog, setIslog } = useContext(GlobalContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const user = {
      email,
      password,
    };
    login(user).then((res) => {
      if (res) {
        setIslog(true);
        authentication.onAuthentication();

        console.log("login status", authentication.isLoggedin);
        history.push(`/profile`);
      }
    });
  };
  return (
    <>
      <div className="container">
        <h1>Login page</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your Password"
              minLength="8"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            disabled={(!email, !password)}
            type="submit"
            className="btn btn-primary mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
