import { handleActions } from "redux-actions";
import { postData } from "../libs/data/postData";

const INITIALIZE = "postList/INITIALIZE";

export const initialize = () => ({ type: INITIALIZE });
// 메인 리스트에뿌리는 아이템값
const initialState = {
  postData,
};
console.log(initialState.postData);
export const postList = handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
  },
  initialState
);
