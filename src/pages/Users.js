import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  background-color: green;
`;

const Users = () => {
  let history = useHistory();

  return (
    <Wrapper>
      <h1>Users</h1>
      <div onClick={() => history.push("/#usersProject")}>do sekcja 2</div>
    </Wrapper>
  );
};

export default Users;
