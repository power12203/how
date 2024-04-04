import React, { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../libs/styles/palette";
import { Link } from "react-router-dom";
import Tags from "../common/Tags";
import Responsive from "../../libs/common/Responsive";
// import { postData } from "../../libs/data/postData";

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

const PostDiv = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHeadDiv = styled.div`
  border-bottom: 1px solid ${palette.Indigo[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContentDiv = styled.div`
  font-size: 1.3125rem;
  color: ${palette.Indigo[8]};
`;

const Post = ({ id, username, postData }) => {
  // console.log(postData);

  const post = postData.find((item) => item.id === Number(id));
  console.log(post);

  return (
    <PostDiv>
      <PostHeadDiv>
        <h1>{post && post.title}</h1>
        <SubInfoDiv>
          <span>
            <b>
              <Link style={{ textDecoration: "none" }} to="/username">
                {post && post.username}
              </Link>
            </b>
          </span>
          <span>{new Date().toLocaleString()}</span>
        </SubInfoDiv>
        {post.tags && post.tags.map((tag) => <Tags tag={tag} />)}
      </PostHeadDiv>

      <PostContentDiv
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      />
    </PostDiv>
  );
};

export default Post;
