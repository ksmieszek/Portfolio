import React from "react";
import { projectPortfolioDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";

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
