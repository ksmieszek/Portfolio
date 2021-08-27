import React from "react";
import styled from "styled-components";
import ExternalLinks from "components/molecules/ExternalLinks";

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderTitle = styled.div`
  font-size: 2.9rem;
  font-weight: 500;
`;

const StyledDescription = styled.div`
  margin-top: 20px;
  padding-right: 30px;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 1.4;
  }
`;

const ProjectHeaderTemplate = ({ project }) => {
  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <StyledHeaderTitle>{project.title}</StyledHeaderTitle>
        <div>
          <ExternalLinks github={project.githubLink} site={project.siteLink} />
        </div>
      </StyledHeaderWrapper>
      {project.detailedDescription && <StyledDescription>{project.detailedDescription}</StyledDescription>}
    </StyledWrapper>
  );
};

export default ProjectHeaderTemplate;
