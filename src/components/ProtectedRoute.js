import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext, authentication } from "../context/GlobalState";

const ProtectedRoute = (props) => {
  const { authentication } = useContext(GlobalContext);
  useEffect(() => {
    console.log("hello world");
  }, []);
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLoginStatus() ? (
          <props.component {...data} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
