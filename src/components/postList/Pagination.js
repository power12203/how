import React, { useState } from "react";
// import { Link } from "react-router-dom";
import qs from "qs";
import styled from "styled-components";
import Button from "../../libs/common/Button";

const PaginationDiv = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const buildLink = ({ auth, page }) => {
  const query = qs.stringify({ page });
  return auth ? `${auth}?${query}` : `/?${query}`;
};

const Pagination = (props) => {
  const { page, handlePage, auth, lastPage } = props;

  const [username, setUsername] = useState("power12203");

  const onBefore = (e) => {
    handlePage(page - 1);
  };
  const onNext = (e) => {
    handlePage(page + 1);
  };
  return (
    <PaginationDiv>
      <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ auth, page: page - 1 })}
        onClick={onBefore}
      >
        이전
      </Button>
      <div>{page}</div>
      <Button
        disabled={page === lastPage}
        to={page === lastPage ? undefined : buildLink({ auth, page: page + 1 })}
        onClick={onNext}
      >
        다음
      </Button>
    </PaginationDiv>
  );
};

export default Pagination;
