import { handleActions } from "redux-actions";

const BRING_POST = "post/BRING_POST";
export const bring_post = (id, username, title, content, tags) => {
  return { type: BRING_POST, id, username, title, content, tags };
};

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
