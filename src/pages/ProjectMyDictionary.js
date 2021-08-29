import React from "react";
import { projectMyDictionaryDescription } from "utils/ProjectsDescriptions";
// import styled from "styled-components";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";
import routes from "routes";

const ProjectMyDictionary = () => {
  return (
    <ProjectContentTepmlate projectId={projectMyDictionaryDescription.id}>
      <ProjectHeaderTemplate project={projectMyDictionaryDescription} />
      <ProjectFeaturesTemplate features={projectMyDictionaryDescription.features} />
      <ProjectInteractionsTemplate videos={projectMyDictionaryDescription.videos} />
      <ProjectNextLinkTemplate link={routes.codefast} />
    </ProjectContentTepmlate>
  );
};

export default ProjectMyDictionary;
