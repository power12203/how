import React, { useState } from "react";
import PostList from "../components/postList/PostList";
import Header from "../libs/common/Header";
import { bring_post } from "../modules/post";
import { useSelector } from "react-redux";
import Pagination from "../components/postList/Pagination";
import { postData } from "../libs/data/postData";

const PostListPage = () => {
  const [page, setPage] = useState(1);
  const data = useSelector((state) => state.post);
  // const []

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };
  const postsPerPage = 5;
  const currentPosts = postData
    ? postData.slice((page - 1) * postsPerPage, page * postsPerPage)
    : [];

  // console.log(currentPosts, "power");
  // console.log(postData, "12203");
  return (
    <div>
      <Header />
      <PostList
        data={data}
        bring_post={bring_post}
        page={page}
        currentPosts={currentPosts}
      />
      <Pagination page={page} handlePage={handlePage} />
    </div>
  );
};

export default PostListPage;
