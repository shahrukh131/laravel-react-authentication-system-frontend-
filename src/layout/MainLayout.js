import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Redirect } from "react-router-dom";
const MainLayout = (props) => {
  const { authentication, islog } = useContext(GlobalContext);

  console.log("status", authentication.isLoggedin);

  if (localStorage.getItem("usertoken")) {
    return <>{props.children}</>;
  } else {
    return (
      <>
        <Redirect to="/login" />
      </>
    );
  }
};

export default MainLayout;
