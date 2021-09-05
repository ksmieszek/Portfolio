import React from "react";
import { projectHotelDesktopDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";

const ProjectHotelDesktop = () => {
  return (
    <ProjectContentTepmlate projectId={projectHotelDesktopDescription.id}>
      <ProjectHeaderTemplate project={projectHotelDesktopDescription} />
      <ProjectFeaturesTemplate features={projectHotelDesktopDescription.features} />
      <ProjectInteractionsTemplate videos={projectHotelDesktopDescription.videos} />
      <ProjectNextLinkTemplate link={routes.portfolio} />
    </ProjectContentTepmlate>
  );
};

export default ProjectHotelDesktop;
