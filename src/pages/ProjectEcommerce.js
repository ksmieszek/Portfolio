import React from "react";
import { projectECommerceDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";

const ProjectEcommerce = () => {
  return (
    <ProjectContentTepmlate projectId={projectECommerceDescription.id}>
      <ProjectHeaderTemplate project={projectECommerceDescription} />
      <ProjectFeaturesTemplate features={projectECommerceDescription.features} />
      <ProjectInteractionsTemplate videos={projectECommerceDescription.videos} />
      <ProjectNextLinkTemplate link={routes.mydictionary} />
    </ProjectContentTepmlate>
  );
};

export default ProjectEcommerce;
