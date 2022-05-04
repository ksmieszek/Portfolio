import React from "react";
import { projectMyDictionaryDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "components/templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "components/templates/ProjectHeaderTemplate";
import ProjectInteractionsTemplate from "components/templates/ProjectInteractionsTemplate";
import ProjectFeaturesTemplate from "components/templates/ProjectFeaturesTemplate";
import ProjectNextLinkTemplate from "components/templates/ProjectNextLinkTemplate";

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
