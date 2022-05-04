import React from "react";
import styled, { css } from "styled-components";

const StyledTitle = styled.h2`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.m};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  ${(props) =>
    props.withDot &&
    css`
      &::after {
        color: rgba(253, 224, 24, 1);
        content: ".";
      }
    `}
`;

const SectionTitle = ({ children, fontSize, withDot }) => {
  return (
    <StyledTitle fontSize={fontSize} withDot={withDot}>
      {children}
    </StyledTitle>
  );
};

export default SectionTitle;
