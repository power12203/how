import { handleActions } from "redux-actions";

const BRING_POST = "post/BRING_POST";
export const bring_post = (id, username, title, content, tags) => {
  // console.log(username);
  return { type: BRING_POST, id, username, title, content, tags };
};
// 클릭했을때 들어오는곳
const initialState = {
  id: "",
  username: "",
  title: "",
  content: "",
  tags: [],
};
export const post = handleActions(
  {
    [BRING_POST]: (state, action) => ({
      ...state,
      id: action.id,
      username: action.username,
      title: action.title,
      content: action.content,
      tags: action.tags,
    }),
  },
  initialState
);
