import React from "react";
import { projectHotelWebDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "templates/ProjectNextLinkTemplate";

const ProjectHotelWeb = () => {
  return (
    <ProjectContentTepmlate projectId={projectHotelWebDescription.id}>
      <ProjectHeaderTemplate project={projectHotelWebDescription} />
      <ProjectFeaturesTemplate features={projectHotelWebDescription.features} />
      <ProjectInteractionsTemplate videos={projectHotelWebDescription.videos} />
      <ProjectNextLinkTemplate link={routes.hotelmanagement} />
    </ProjectContentTepmlate>
  );
};

export default ProjectHotelWeb;
