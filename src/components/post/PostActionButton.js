import React from "react";
import Button from "../../libs/common/Button";
import styled from "styled-components";

const ActionButton = styled.button``;

const PostActionButton = () => {
  return (
    <div>
      <Button Indigo>수정</Button>
      <Button Indigo>삭제</Button>
    </div>
  );
};

export default PostActionButton;
