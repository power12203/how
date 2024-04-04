import React from "react";
import { Link } from "react-router-dom";
import Responsive from "../../libs/common/Responsive";
import styled, { css } from "styled-components";
import palette from "../../libs/styles/palette";
import PostItem from "./PostItem";
import Button from "../../libs/common/Button";
import { postData } from "../../libs/data/postData";
import { bring_post } from "../../modules/post";
import { useDispatch } from "react-redux";

const PostListDiv = styled(Responsive)`
  margin-top: 3rem;
`;

const WriteLinkDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 3rem;
`;

const PostList = ({ data }) => {
  const { id, username, title, content, tags } = data;
  console.log(id);
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
      {postData &&
        postData.map((item) => <PostItem item={item} onClick={onClick} />)}
    </PostListDiv>
  );
};

export default PostList;
