import React from "react";
import { projectHotelDesktopDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "components/templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "components/templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "components/templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "components/templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "components/templates/ProjectNextLinkTemplate";

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
