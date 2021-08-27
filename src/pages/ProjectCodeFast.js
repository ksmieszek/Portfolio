import React from "react";
import { projectCodeFastDescription } from "utils/ProjectsDescriptions";
// import styled from "styled-components";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";

const ProjectCodeFast = () => {
  return (
    <ProjectContentTepmlate projectId={projectCodeFastDescription.id}>
      <ProjectHeaderTemplate project={projectCodeFastDescription} />
      <ProjectFeaturesTemplate features={projectCodeFastDescription.features} />
      <ProjectInteractionsTemplate videos={projectCodeFastDescription.videos} />
    </ProjectContentTepmlate>
  );
};

export default ProjectCodeFast;
