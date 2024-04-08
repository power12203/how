import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Responsive from "./Responsive";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/auth";
const HeaderDiv = styled(Responsive)`
  z-index: 1000;
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  .logo {
    width: 300px;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    width: 150px;
    display: flex;
    align-items: center;
  }
`;

const WrapperDiv = styled.div`
  margin-left: 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserDiv = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = () => {
  const { user, loginState } = useSelector((state) => state.auth);
  // console.log(user.username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // 로그아웃 액션 디스패치
    dispatch(logout(false));
  };
  return (
    <>
      <HeaderDiv>
        <WrapperDiv>
          <Button
            style={{
              width: "100px",
              display: "flex",
              height: "42px",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="/"
            className="logo"
          >
            Main
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="right">
              <UserDiv>{user.username}</UserDiv>
              <Button onClick={handleLogout}>로그아웃</Button>
            </div>
            <div className="right">
              <Button
                style={{
                  display: "flex",
                  height: "42px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                Cyan
                to="/login"
              >
                로그인
              </Button>
            </div>
            <div className="right">
              <Button
                style={{
                  display: "flex",
                  height: "42px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                Cyan
                to="/register"
              >
                회원등록
              </Button>
            </div>
          </div>
        </WrapperDiv>
      </HeaderDiv>
      <div style={{ height: "4rem" }} />
    </>
  );
};

export default Header;
