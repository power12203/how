import React from "react";
import Register from "../components/auth/Register";
import Template from "../components/auth/Template";

const RegisterPage = ({ mode }) => {
  return (
    <Template>
      <Register mode={mode} />
    </Template>
  );
};

export default RegisterPage;
