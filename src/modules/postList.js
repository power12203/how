import { handleActions } from "redux-actions";
import { postData } from "../libs/data/postData";

const INITIALIZE = "postList/INITIALIZE";

export const initialize = () => ({ type: INITIALIZE });

const initialState = {
  postData,
  showItem: 5,
  lastPage: Math.floor(postData.length / 5) + 1,
};
console.log(initialState.postData);
export const postList = handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
  },
  initialState
);
