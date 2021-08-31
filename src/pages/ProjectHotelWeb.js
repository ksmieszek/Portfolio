import React from "react";
import { projectHotelWebDescription } from "utils/ProjectsDescriptions";
import styled from "styled-components";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";
import routes from "routes";

const ProjectErsi = () => {
  return (
    <ProjectContentTepmlate projectId={projectHotelWebDescription.id}>
      <ProjectHeaderTemplate project={projectHotelWebDescription} />
      <ProjectFeaturesTemplate features={projectHotelWebDescription.features} />
      <ProjectInteractionsTemplate videos={projectHotelWebDescription.videos} />
      <ProjectNextLinkTemplate link={routes.codefast} />
    </ProjectContentTepmlate>
  );
};

export default ProjectErsi;
