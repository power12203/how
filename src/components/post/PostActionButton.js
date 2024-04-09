import React from "react";
// import Button from "../../libs/common/Button";
import styled from "styled-components";
import palette from "../../libs/styles/palette";
import { Link } from "react-router-dom";
import Button from "../../libs/common/Button";

const PostActionDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;
const ActionButton = styled(Button)`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.Red[3]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.Orange[1]};
    color: ${palette.Orange[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButton = (props) => {
  const { onClick, id } = props;
  return (
    <PostActionDiv>
      <ActionButton to={`/update/${id}`} onClick={onClick}>
        수정
      </ActionButton>
      <ActionButton>삭제</ActionButton>
    </PostActionDiv>
  );
};

export default PostActionButton;
