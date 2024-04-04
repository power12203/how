import { combineActions } from "redux-actions";
import { combineReducers } from "redux";
import { auth } from "./auth";
import { write } from "./write";
import { post } from "./post";

export const rootReducers = combineReducers({
  auth,
  write,
  post,
});
