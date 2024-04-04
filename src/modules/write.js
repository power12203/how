import { postData } from "../libs/data/postData";
import { handleActions } from "redux-actions";

const CHANGE_TITLE = "write/CHANGE_TITLE";
const CHANGE_CONTENT = "write/CHANGE_CONTENT";
const POST_DATA = "write/POST_DATA";
const INITALIZE = "write/INITALIZE";
const CHANGE_TAGS = "write/CHANGE_TAGS";

export const initialize = () => ({ type: INITALIZE });
export const change_tags = (tags) => ({ type: CHANGE_TAGS, tags });
export const change_title = (title) => ({ type: CHANGE_TITLE, title });
export const change_content = (content) => ({ type: CHANGE_CONTENT, content });
export const post_data = (id, title, content, tags) => {
  return { type: POST_DATA, id, title, content, tags };
};

const initialState = {
  id: "",
  title: "",
  content: "",
  tags: "",
  postData,
};

export const write = handleActions(
  {
    [INITALIZE]: (state, action) => ({
      ...state,
      id: "",
      title: "",
      content: "",
      tags: "",
    }),
    [CHANGE_TITLE]: (state, action) => ({
      ...state,
      title: action.title,
    }),
    [CHANGE_TAGS]: (state, action) => ({
      ...state,
      tags: action.tags,
    }),

    [CHANGE_CONTENT]: (state, action) => ({
      ...state,
      content: action.content,
    }),

    [POST_DATA]: (state, action) => {
      const post = {
        id: action.id,
        title: action.title,
        content: action.content,
        tags: action.tags,
      };

      return {
        ...state,
        postList: [state.postList, post],
      };
    },
  },
  initialState
);
