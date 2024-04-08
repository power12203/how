import React from "react";

import Responsive from "../../libs/common/Responsive";
import styled, { css } from "styled-components";

import PostItem from "./PostItem";
import Button from "../../libs/common/Button";
import { postData } from "../../libs/data/postData";
import { bring_post } from "../../modules/post";
import { useDispatch } from "react-redux";
import { auth } from "../../modules/auth";
import { useSearchParams } from "react-router-dom";

const PostListDiv = styled(Responsive)`
  margin-top: 3rem;
`;

const WriteLinkDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 3rem;
`;

const PostList = (props) => {
  // const { id, username, title, content, tags } = data;
  const { auth, postData, bring_post, showItemNum, currentPosts } = props;
  console.log(currentPosts);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  // console.log(id);
  const dispatch = useDispatch();
  const onClick = (id) => {
    const post = postData.filter((item) => item.id === id);
    dispatch(
      bring_post(
        post && post[0].id,
        post && post[0].username,
        post && post[0].title,
        post && post[0].content,
        post && post[0].tags
      )
    );
    if (!auth) {
      return (
        <PostListDiv>
          <h1>로그인후 이용가능합니다.</h1>
        </PostListDiv>
      );
    }
  };

  return (
    <PostListDiv>
      <WriteLinkDiv>
        <Button
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to="/write"
        >
          새글 등록
        </Button>
      </WriteLinkDiv>
      {currentPosts &&
        currentPosts.map((item, idx) => (
          <PostItem item={item} onClick={onClick} />
        ))}
    </PostListDiv>
  );
};

export default PostList;
