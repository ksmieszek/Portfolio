import React from "react";
import { projectPixelPerfectDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import styled from "styled-components";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";
import SectionTitle from "components/atoms/SectionTitle";
import pixelperfectViewsImage from "assets/pixelperfectProject/pixelperfect-views.png";

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

const StyledParagraph = styled.p`
  width: fit-content;
  margin: 20px auto 0;
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: 1.4rem;
  }
`;

const ProjectPixelPerfect = () => {
  return (
    <ProjectContentTepmlate projectId={projectPixelPerfectDescription.id}>
      <ProjectHeaderTemplate project={projectPixelPerfectDescription}>
        <StyledParagraph>
          Link do odwzorowywanej strony -{" "}
          <a href="https://www.esri.com/en-us/arcgis/products/mapping" target="_blank" rel="noreferrer">
            https://www.esri.com/en-us/arcgis/products/mapping
          </a>
        </StyledParagraph>
      </ProjectHeaderTemplate>
      <ProjectFeaturesTemplate features={projectPixelPerfectDescription.features} />
      <StyledViewsWrapper>
        <SectionTitle>Widoki</SectionTitle>
        <StyledViews src={pixelperfectViewsImage} alt="" />
      </StyledViewsWrapper>
      <ProjectInteractionsTemplate videos={projectPixelPerfectDescription.videos} />
      <ProjectNextLinkTemplate link={routes.codefast} />
    </ProjectContentTepmlate>
  );
};

export default ProjectPixelPerfect;
