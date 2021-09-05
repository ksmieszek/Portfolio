import React from "react";
import { projectMyDictionaryDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";

const ProjectMyDictionary = () => {
  return (
    <ProjectContentTepmlate projectId={projectMyDictionaryDescription.id}>
      <ProjectHeaderTemplate project={projectMyDictionaryDescription} />
      <ProjectFeaturesTemplate features={projectMyDictionaryDescription.features} />
      <ProjectInteractionsTemplate videos={projectMyDictionaryDescription.videos} />
      <ProjectNextLinkTemplate link={routes.pixelperfect} />
    </ProjectContentTepmlate>
  );
};

export default ProjectMyDictionary;
