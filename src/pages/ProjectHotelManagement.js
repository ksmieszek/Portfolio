import React from "react";
import { projectHotelManagementDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "components/templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "components/templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "components/templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "components/templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "components/templates/ProjectNextLinkTemplate";

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
