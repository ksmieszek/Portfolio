import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
`;

const SectionTitle = (props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default SectionTitle;
