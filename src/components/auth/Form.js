import React, { useCallback, useEffect, useState } from "react";
import Button from "../../libs/common/Button";
import { Link, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import palette from "../../libs/styles/palette";
import { useDispatch, useSelector } from "react-redux";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REG_FAIL,
  REG_SUCCESS,
  login,
  register,
  changeStatus,
  NORMAL,
} from "../../modules/auth";

const FormDiv = styled.div`
  h3 {
    margin: 0;
    color: ${palette.Gray[8]};
    margin-bottom: 1rem;
  }
`;
const InputStyle = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.Gray[5]};
  padding-bottom: 0%.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.Teal[7]};
    border-bottom: 1px solid ${palette.Gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonStyle = styled(Button)`
  margin-top: 1rem;
`;

const FootDiv = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.Gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.Gray[9]};
    }
  }
`;

const textType = {
  login: "로그인",
  register: "회원 가입",
};
const Form = ({ mode, status, user }) => {
  console.log(user); //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const user = useSelector((state) => ({ user: state.auth.user }));
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 액션함수

  const text = textType[mode];

  // if (status === "LOGIN_FAIL") {
  //   setError("로그인에 실패했습니다.");
  // } else if (status === "REG_FAIL") {
  //   setError("이미 존재하는 사용자입니다.");
  // }

  const onsubmit = (e) => {
    e.preventDefault(); // 이벤트 새로고침을 막겠다//저장은 스택
    if (username === "") {
      setError("아이디를 입력해주십시오.");
      return;
    }
    if (password === "") {
      setError("비밀번호를 입력하시오");
      return;
    }
    if (mode === "register") {
      // 회원 가입 모드일 때

      if (password !== passwordConfirm) {
        setError("비밀번호가 일치하지 않습니다.");
        return;
      }

      dispatch(register(username, password));
    } else {
      dispatch(login(username, password));
    }

    // 폼 제출 후 상태 초기화
    setUsername("");
    setPassword("");
    setPasswordConfirm("");
  };

  useEffect(() => {
    if (status === LOGIN_SUCCESS) {
      navigate("/");
    } else if (status === LOGIN_FAIL) {
      setError("로그인에 실패했습니다.");
      setPassword("");
    } else if (status === REG_SUCCESS) {
      navigate("/login");
      dispatch(changeStatus(NORMAL));
    } else if (status === REG_FAIL) {
      setError("이미 존재하는 사용자입니다.");
    }
  }, [status]);

  return (
    <FormDiv>
      <h3> {text} </h3>
      <form onSubmit={onsubmit}>
        <InputStyle
          type="text"
          autoComplete="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디"
        />
        <InputStyle
          type="password"
          autoComplete="new-password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        {mode === "register" && (
          <InputStyle
            type="password"
            autoComplete="new-password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="비밀번호 확인"
          />
        )}

        <div style={{ color: "red" }}>{error}</div>
        <ButtonStyle Cyan fulWidth>
          {text}
        </ButtonStyle>
      </form>

      <FootDiv>
        {mode === "login" ? (
          <Link to="/register">회원 가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </FootDiv>
    </FormDiv>
  );
};

export default Form;

// const onclick = (e) => {
//   console.log(e.target);
//   if (e.target.innerHTML === "로그인") {
//     login("login");
//   } else {
//     login("register");
//   }
// };
// if (e.target.password.value !== e.target.passwordConfirm.value) {
//   alert("비밀번호가 일치하지 않습니다.");
//   e.target.password.value = "";
//   e.target.passwordConfirm.value = "";
// } else if (
//   e.target.username.value === "" ||
//   e.target.password.value === ""
// ) {
//   alert("아이디와 비밀번호를 전부 입력해주세요.");
//   e.target.username.value = "";
//   e.target.password.value = "";
//   e.target.passwordConfirm.value = "";
// } else {
//   const username = e.target.username.value;

//   const password = e.target.password.value;

//   alert(e.target.username.value + "님, 회원가입에 성공하셨습니다.");
//   e.target.username.value = "";
//   e.target.password.value = "";
//   e.target.passwordConfirm.value = "";
//   registerr(username, password);
//   navigate("/login");
//   return;
// }

//   if (e.target.password.value !== e.target.passwordConfirm.value) {
//       alert("비밀번호가 일치하지 않습니다.");
//       e.target.password.value = "";
//       e.target.passwordConfirm.value = "";
//       return;
//     } else if (
//       e.target.username.value === "" ||
//       e.target.password.value === ""
//     ) {
//       alert("아이디와 비밀번호를 전부 입력해주세요.");
//       e.target.username.value = "";
//       e.target.password.value = "";
//       e.target.passwordConfirm.value = "";
//       return;
//     } else {
//       const newData = {
//         username: e.target.username.value,
//         password: e.target.password.value,
//       };
//
//     }else{
//       const use = userData.find(
//         (user) => e.target.username.value === user.username
//       );
//       if (use) {
//         if (use.password === e.target.password.value) {
//           alert("로그인 하였습니다.");
//           login_mode(true, e.target.username.value);
//           navigate("/");
//         } else {
//           alert("아이디와 비밀번호가 일치하지 않습니다.");
//           e.target.password.value = "";
//         }
//       } else {
//         alert("아이디가 존재하지 않습니다.");
//         e.target.username.value = "";
//         e.target.password.value = "";
//       }
//     }
// console.log(e.target.username.value);
// console.log(e.target.password.value);
