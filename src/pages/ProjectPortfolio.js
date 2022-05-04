import React from "react";
import { projectPortfolioDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "components/templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "components/templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "components/templates/ProjectFeaturesTemplate";
import ProjectNextLinkTemplate from "components/templates/ProjectNextLinkTemplate";

const ProjectPortfolio = () => {
  return (
    <ProjectContentTepmlate projectId={projectPortfolioDescription.id}>
      <ProjectHeaderTemplate project={projectPortfolioDescription} />
      <ProjectFeaturesTemplate features={projectPortfolioDescription.features} />
      <ProjectNextLinkTemplate link={routes.ecommerce} />
    </ProjectContentTepmlate>
  );
};

export default ProjectPortfolio;
