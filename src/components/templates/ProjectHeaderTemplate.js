import React from "react";
import styled from "styled-components";
import ExternalLinks from "components/molecules/ExternalLinks";
import SectionTitle from "components/atoms/SectionTitle";
import { theme } from "theme";

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDescription = styled.div`
  margin-top: 20px;
  padding-right: 10px;
  font-size: ${(props) => props.theme.fontSize.xxs};
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xs};
    line-height: 1.4;
  }
`;

const ProjectHeaderTemplate = ({ project, children }) => {
  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <SectionTitle fontSize={theme.fontSize.xl}>{project.title}</SectionTitle>
        <div>
          <ExternalLinks github={project.githubLink} site={project.siteLink} additionalGithub={project.additionalGithubLink} />
        </div>
      </StyledHeaderWrapper>
      {project.detailedDescription && <StyledDescription>{project.detailedDescription}</StyledDescription>}
      {children}
    </StyledWrapper>
  );
};

export default ProjectHeaderTemplate;
