import React from "react";
import { projectHotelManagementDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";

const ProjectHotelManagement = () => {
  return (
    <ProjectContentTepmlate projectId={projectHotelManagementDescription.id}>
      <ProjectHeaderTemplate project={projectHotelManagementDescription} />
      <ProjectFeaturesTemplate features={projectHotelManagementDescription.features} />
      <ProjectInteractionsTemplate videos={projectHotelManagementDescription.videos} />
      <ProjectNextLinkTemplate link={routes.hoteldesktop} />
    </ProjectContentTepmlate>
  );
};

export default ProjectHotelManagement;
