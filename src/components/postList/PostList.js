import React from "react";

import Responsive from "../../libs/common/Responsive";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import PostItem from "./PostItem";
import Button from "../../libs/common/Button";
import { useDispatch } from "react-redux";
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
  // console.log(currentPosts);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (id) => {
    const post = currentPosts.filter((item) => item.id === id);

    dispatch(
      bring_post(
        post && post[0].id,
        post && post[0].username,
        post && post[0].title,
        post && post[0].content,
        post && post[0].tags
      )
    );
    navigate(`/${post[0].username}/${post[0].id}`);
  };
  // if (!auth) {
  //   return (
  //     <PostListDiv>
  //       <h1>로그인후 이용가능합니다.</h1>
  //     </PostListDiv>
  //   );
  // }

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
          <PostItem item={item} handleClick={handleClick} />
        ))}
    </PostListDiv>
  );
};

export default PostList;
