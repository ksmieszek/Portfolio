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
      <ProjectFeaturesTemplate features={projectECommerceDescription.features} title="Cechy projektu strona klienta" />
      <ProjectInteractionsTemplate videos={projectECommerceDescription.videos} />
      <ProjectFeaturesTemplate features={projectECommerceDescription.additionalFeatures} title="Cechy projektu strona admina" distanceOut={true} />
      <ProjectInteractionsTemplate videos={projectECommerceDescription.additionalVideos} />
      <ProjectNextLinkTemplate link={routes.mydictionary} />
    </ProjectContentTepmlate>
  );
};

export default ProjectEcommerce;
