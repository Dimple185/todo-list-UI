import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = JSON.parse(localStorage.getItem("userData"));
        console.log('user',currentUser);
        if (currentUser?.user) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/signin" }} />;
      }}
    />
  );
}

export default PrivateRoute;
