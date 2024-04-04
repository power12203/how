import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../libs/styles/palette";

const TagDiv = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.Blue[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.Blue[6]};
    }
  }
`;
const Tags = (props) => {
  const { tag } = props;
  return (
    <TagDiv>
      <Link className="tag" to="/?tag=tag">
        {tag}
      </Link>
    </TagDiv>
  );
};

export default Tags;
