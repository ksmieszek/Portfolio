import React from "react";
import { projectHotelWebDescription } from "utils/ProjectsDescriptions";
import routes from "routes";
import ProjectContentTepmlate from "components/templates/ProjectContentTepmlate";
import ProjectHeaderTemplate from "components/templates/ProjectHeaderTemplate";
import ProjectFeaturesTemplate from "components/templates/ProjectFeaturesTemplate";
import ProjectInteractionsTemplate from "components/templates/ProjectInteractionsTemplate";
import ProjectNextLinkTemplate from "components/templates/ProjectNextLinkTemplate";

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
