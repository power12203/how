export const LOGIN = "auth/LOGIN";
export const LOGIN_REGISTER = "auth/LOGIN_REGISTER";
export const CHANGE_STATUS = "auth/CHANGE_STATUS";
const LOG_OUT = "auth/LOG_OUT";
////
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REG_SUCCESS = "REG_SUCCESS";
export const REG_FAIL = "REG_FAIL";
export const NORMAL = "NORMAL";

export const login = (name, password) => ({ type: LOGIN, name, password });
export const register = (name, password) => ({
  type: LOGIN_REGISTER,
  name,
  password,
});
export const changeStatus = (status) => ({ type: CHANGE_STATUS, status });
export const logout = (loginState) => ({ type: LOG_OUT, loginState });

const userData = []; // 전역 변수

const initialState = {
  login: {
    password: "",
  },
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },

  status: "",
  user: "",
  loginState: false,
};

//스테이트 갖있는값,액션은 동작에따른값
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const user1 = userData.find((user) => user.username === action.name);
      // console.log(user1);
      if (user1 && user1.password === action.password) {
        // 있는정보인지 아닌지 판단하여 실행*
        return {
          ...state,
          status: LOGIN_SUCCESS,
          user: user1,
        };
      } else {
        return {
          ...state,
          status: LOGIN_FAIL,
        };
      }
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case LOG_OUT:
      return {
        ...state,
        loginState: action.loginState,
        user: action.user,
      };
    case LOGIN_REGISTER:
      const existingUser = userData.find(
        (user) => user.username === action.name
      );
      if (existingUser) {
        return {
          ...state,
          status: REG_FAIL,
        };
      } else {
        const newUser = {
          username: action.name,
          password: action.password,
        };
        userData.push(newUser);
        return {
          ...state,
          status: REG_SUCCESS,
          user: newUser,
        };
      }
    default:
      return state;
  }
}; // 지역변수

// export const auth = handleActions(
//   {
//     [LOGIN_MODE]: (state, action) => ({
