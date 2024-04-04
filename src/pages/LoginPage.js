import React from "react";
import Login from "../components/auth/Login";
import Template from "../components/auth/Template";

const LoginPage = ({ mode }) => {
  // console.log("page", mode);
  return (
    <Template>
      <Login mode={mode} />
    </Template>
  );
};

export default LoginPage;
