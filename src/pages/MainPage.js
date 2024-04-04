import React from "react";
import { Link } from "react-router-dom";
import Header from "../libs/common/Header";
import Button from "../libs/common/Button";

const MainPage = () => {
  return (
    <>
      <Header />
      <div style={{ position: "absolute", top: "100px", left: "50%" }}>
        <Button to="/write">글등록</Button>
      </div>
      {/* <div style={{ position: "absolute", left: "50%", top: "50px" }}>
        <h1>Main</h1>
      </div> */}
    </>
  );
};

export default MainPage;
