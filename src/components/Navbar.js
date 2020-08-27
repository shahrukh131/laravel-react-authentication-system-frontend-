import React, { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  let history = useHistory();
  const { getProfile } = useContext(GlobalContext);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   getProfile().then((res) => {
  //     console.log(res);
  //   });
  // });

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    history.push(`/`);
  };
  const loginRegLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </ul>
  );

  const userLink = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/task" className="nav-link">
          Task
        </Link>
      </li>
      <li className="nav-item">
        <a href="" onClick={logout} className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  );
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Task Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
