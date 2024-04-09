import React from "react";
import styled, { css } from "styled-components";
import palette from "../../libs/styles/palette";
import { Link } from "react-router-dom";
import Tags from "../common/Tags";
import { useSelector } from "react-redux";
import Button from "../../libs/common/Button";

const PostItemDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.Indigo[2]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.Indigo[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const SubInfoDiv = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.Indigo[6]};
  span + span::before {
    color: ${palette.Indigo[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;

const PostItem = (props) => {
  const { item, handleClick } = props;
  const { user } = useSelector((state) => state.auth);
  // const onClick = (id) => {
  //   console.log(id);
  // };
  // console.log(item);
  return (
    <div>
      <PostItemDiv>
        <h2 style={{ color: "black" }}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => handleClick(item.id)}
            to={`/${item.username}/${item.id}`}
          >
            {item.title}
          </Link>
        </h2>
        <SubInfoDiv>
          <span>
            <b>
              <Link style={{ textDecoration: "none" }} to="/username">
                {user.username}
              </Link>
            </b>
          </span>
          <span>{new Date().toLocaleString()}</span>
        </SubInfoDiv>
        {item.tags && item.tags.map((tag) => <Tags tag={tag} />)}
        <p>{item.content}</p>
      </PostItemDiv>
    </div>
  );
};

export default PostItem;
