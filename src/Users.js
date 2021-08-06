import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import { motion } from "framer-motion";

// const pageTransition = {
//   in: {
//     x: 0,
//   },
//   out: {
//     x: "100%",
//   },
//   exit: {
//     x: "-100%",
//   },
// };

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  background-color: green;
`;

const Users = () => {
  let history = useHistory();

  return (
    // <motion.div key="users" initial="out" animate="in" exit="exit" variants={pageTransition} transition={{ duration: 1 }}>
    <Wrapper>
      <h1>Users</h1>
      {/* <a href="/#twojastara">link</a> */}

      <div onClick={() => history.push("/#usersProject")}>do sekcja 2</div>
    </Wrapper>
    // </motion.div>
  );
};

export default Users;
