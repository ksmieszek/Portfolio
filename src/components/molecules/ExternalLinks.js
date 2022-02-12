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

  &:not(:first-child) {
    margin-left: 5px;

    @media (min-width: 768px) {
      margin-left: 10px;
    }

    @media (min-width: 1024px) {
      margin-left: 15px;
    }
  }
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

const ExternalLinks = ({ github, site, additionalGithub }) => {
  return (
    <>
      {github && (
        <StyledLink href={github} target="_blank">
          <StyledLinkIcon src={Icons.github.icon} alt="" />
        </StyledLink>
      )}
      {site && (
        <StyledLink href={site} target="_blank">
          <StyledLinkIcon src={Icons.externalLink.icon} alt="" />
        </StyledLink>
      )}
      {additionalGithub && (
        <StyledLink href={additionalGithub} target="_blank">
          <StyledLinkIcon src={Icons.github.icon} alt="" />
        </StyledLink>
      )}
    </>
  );
};

export default ExternalLinks;
