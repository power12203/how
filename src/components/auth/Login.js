import React, { memo } from "react";
import Form from "./Form";
import { connect, useDispatch, useSelector } from "react-redux";
import { login } from "../../modules/auth";

const Login = ({ mode }) => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);
  const onLogin = (username, password) => dispatch(login(username, password));
  // const { mode, login, form } = props;

  return <Form mode={mode} login={onLogin} status={status} user={user} />;
};

export default memo(Login);
