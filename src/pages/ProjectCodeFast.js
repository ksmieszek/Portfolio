import React from "react";
import { projectCodeFastDescription } from "utils/ProjectsDescriptions";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";
import routes from "routes";

const ProjectCodeFast = () => {
  return (
    <ProjectContentTepmlate projectId={projectCodeFastDescription.id}>
      <ProjectHeaderTemplate project={projectCodeFastDescription} />
      <ProjectFeaturesTemplate features={projectCodeFastDescription.features} />
      <ProjectInteractionsTemplate videos={projectCodeFastDescription.videos} />
      <ProjectNextLinkTemplate link={routes.hotelweb} />
    </ProjectContentTepmlate>
  );
};

export default ProjectCodeFast;
