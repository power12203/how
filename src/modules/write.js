import { postData } from "../libs/data/postData";
import { handleActions } from "redux-actions";

const CHANGE_TITLE = "write/CHANGE_TITLE";
const CHANGE_CONTENT = "write/CHANGE_CONTENT";
const POST_DATA = "write/POST_DATA";
const INITALIZE = "write/INITALIZE";
const CHANGE_TAGS = "write/CHANGE_TAGS";
const POST_EDIT = "write/POST_EDIT";

export const initialize = () => ({ type: INITALIZE });
export const change_tags = (tags) => ({ type: CHANGE_TAGS, tags });
export const post_edit = (id, title, content, tags) => ({
  type: POST_EDIT,
  id,
  title,
  content,
  tags,
});
export const change_title = (title) => ({ type: CHANGE_TITLE, title });
export const change_content = (content) => ({ type: CHANGE_CONTENT, content });
export const post_data = (title, content, tags) => {
  return { type: POST_DATA, title, content, tags };
};
// 글작성,수정기능
let id = postData.length + 2; //

const initialState = {
  id: "",
  title: "",
  content: "",
  tags: "",
  postData,
  showItem: 5,
  lastPage: Math.floor(postData.length / 5) + 1,
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
        id,
        title: action.title,
        content: action.content,
        tags: action.tags,
      };
      id = id + 1;

      return {
        ...state,
        postData: [...state.postData, post],
      };
    },
    [POST_EDIT]: (state, action) => {
      const edit = {
        id: action.id,
        title: action.title,
        content: action.content,
        tags: action.tags,
      };
      return {
        ...state,
        postData: [
          ...state.postData.map((item) =>
            item.id === Number(action.id) ? edit : item
          ),
        ],
      };
    },
  },
  initialState
);
