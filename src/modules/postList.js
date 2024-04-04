import { handleActions } from "redux-actions";
import { postData } from "../libs/data/postData";

const INITIALIZE = "postList/INITIALIZE";

export const initialize = () => ({ type: INITIALIZE });

const initialState = {
  postData,
};

export const postList = handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
  },
  initialState
);
