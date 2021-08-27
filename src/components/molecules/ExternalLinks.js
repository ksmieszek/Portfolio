import React from "react";
import styled from "styled-components";
import Icons from "utils/Icons";

const StyledLink = styled.a`
  margin-right: 10px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 20px;
  }

  @media (min-width: 1024px) {
    margin-right: 30px;
  }

  &:hover {
    border-radius: 10px;
    background: #403f4b;
  }
`;

const StyledLinkIcon = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const ExternalLinks = ({ github, site }) => {
  return (
    <>
      {github && (
        <StyledLink href={github}>
          <StyledLinkIcon src={Icons.github.icon} alt="" />
        </StyledLink>
      )}
      {site && (
        <StyledLink href={site}>
          <StyledLinkIcon src={Icons.externalLink.icon} alt="" />
        </StyledLink>
      )}
    </>
  );
};

export default ExternalLinks;
