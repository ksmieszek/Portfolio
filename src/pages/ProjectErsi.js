import React from "react";
import { projectErsiDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import styled from "styled-components";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";
import SectionTitle from "components/atoms/SectionTitle";
import ersiViewsImage from "assets/ersiProject/ersi-views.png";

const StyledViewsWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

const StyledViews = styled.img`
  width: 100%;
  max-width: 100%;
  margin: 30px 0 0;
  padding: 15px 10px;
  background-color: #dedee1;

  @media (min-width: 768px) {
    padding: 40px 30px;
  }

  @media (min-width: 1440px) {
    padding: 70px 50px;
  }
`;

const ProjectErsi = () => {
  return (
    <ProjectContentTepmlate projectId={projectErsiDescription.id}>
      <ProjectHeaderTemplate project={projectErsiDescription} />
      <ProjectFeaturesTemplate features={projectErsiDescription.features} />
      <StyledViewsWrapper>
        <SectionTitle>Widoki</SectionTitle>
        <StyledViews src={ersiViewsImage} alt="" />
      </StyledViewsWrapper>
      <ProjectInteractionsTemplate videos={projectErsiDescription.videos} />
      <ProjectNextLinkTemplate link={routes.codefast} />
    </ProjectContentTepmlate>
  );
};

export default ProjectErsi;
