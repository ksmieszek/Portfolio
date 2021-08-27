import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledWrapper = styled(Link)`
  position: relative;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 224, 24);
  clip-path: polygon(100% 0, 100% 60%, 85% 100%, 0 100%, 0 0);
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(247, 224, 24);
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    z-index: -1;
    background-color: #34333b;
    clip-path: polygon(100% 0, 100% 60%, 85% 100%, 0 100%, 0 0);
  }

  &:hover,
  &:hover::before {
    background-color: #403f4b;
    transition: all 0.2s;
  }

  ${(props) =>
    props.back &&
    css`
      position: fixed;
      top: 20px;
      left: 10px;
      transform: scaleX(-1);
      background-color: #b0b2c3;
      color: #b0b2c3;

      @media (min-width: 1440px) {
        top: 100px;
        left: 20px;
      }
    `}

  ${(props) =>
    props.small &&
    css`
      width: 100px;
      height: 30px;
    `}
`;

const StyledArrow = styled.span`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  border-top: 2px solid rgb(247, 224, 24);
  border-left: 2px solid rgb(247, 224, 24);
  transform: rotate(135deg);

  ${(props) =>
    props.small &&
    css`
      width: 7px;
      height: 7px;
      border-color: #b0b2c3;
    `}
`;

const StyledText = styled.span`
  ${(props) =>
    props.back &&
    css`
      transform: scaleX(-1);
    `}
`;

const LinkButton = ({ link, back, small, children, ...args }) => {
  return (
    <StyledWrapper to={link} back={back ? 1 : 0} small={small ? 1 : 0} {...args}>
      <StyledText back={back}>{children}</StyledText>
      <StyledArrow small={small} />
    </StyledWrapper>
  );
};

export default LinkButton;
