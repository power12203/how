import React, { memo } from "react";
import Form from "./Form";
import { connect, useDispatch, useSelector } from "react-redux";
import { register } from "../../modules/auth";
const Register = ({ mode }) => {
  const { status } = useSelector((state) => state.auth);

  // console.log(onRegister);
  return <Form mode={mode} status={status} />;
};

export default memo(Register);
