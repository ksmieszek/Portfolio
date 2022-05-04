import React from "react";
import { projectECommerceDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "components/templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "components/templates/ProjectHeaderTemplate";
import ProjectInteractionsTemplate from "components/templates/ProjectInteractionsTemplate";
import ProjectFeaturesTemplate from "components/templates/ProjectFeaturesTemplate";
import ProjectNextLinkTemplate from "components/templates/ProjectNextLinkTemplate";

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
