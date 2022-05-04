import React from "react";
import { projectCodeFastDescription } from "utils/ProjectsDescriptions";
import ProjectContentTepmlate from "components/templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "components/templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "components/templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "components/templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "components/templates/ProjectNextLinkTemplate";
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
