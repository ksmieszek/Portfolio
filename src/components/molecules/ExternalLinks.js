import React from "react";
import styled, { css } from "styled-components";
import Icons from "utils/Icons";

const StyledLink = styled.a`
  padding: 10px;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #403f4b;
  }

  ${(props) =>
    props.second &&
    css`
      margin-left: 10px;

      @media (min-width: 768px) {
        margin-left: 20px;
      }

      @media (min-width: 1024px) {
        margin-left: 30px;
      }
    `}
`;

const StyledLinkIcon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const ExternalLinks = ({ github, site }) => {
  return (
    <>
      {github && (
        <StyledLink href={github} target="_blank">
          <StyledLinkIcon src={Icons.github.icon} alt="" />
        </StyledLink>
      )}
      {site && (
        <StyledLink href={site} target="_blank" second>
          <StyledLinkIcon src={Icons.externalLink.icon} alt="" />
        </StyledLink>
      )}
    </>
  );
};

export default ExternalLinks;
