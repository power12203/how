import React, { useState } from "react";
import Button from "../../libs/common/Button";
import styled from "styled-components";

const ActionButtonDiv = styled.div`
  float: left;
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;
const StyleButton = styled(Button)`
  width: 100px;
  height: 3.5;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = (props) => {
  const { onClick } = props;
  const [isEdit, setIsedit] = useState(false);
  return (
    <ActionButtonDiv>
      <Button Cyan onClick={onClick}>
        포스트{isEdit ? "수정" : "등록"}
      </Button>
      <StyleButton>취소</StyleButton>
    </ActionButtonDiv>
  );
};

export default WriteActionButton;
