import React from "react";
import { otherProjectsDescriptions } from "utils/ProjectsDescriptions";
import styled from "styled-components";
import ExternalLinks from "components/molecules/ExternalLinks";
import LinkButton from "components/atoms/LinkButton";
import folderIcon from "assets/icons/folder.svg";

const StyledWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    margin-top: 150px;
  }
`;

const StyledSectionName = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
`;

const StyledOtherProjects = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const StyledOtherProject = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #302e3a;

  @media (min-width: 768px) {
    margin: 30px 30px;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFolderIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledProjectTitle = styled.h2`
  margin-top: 20px;
  font-size: 1.8rem;
  font-weight: 500;
`;

const StyledTechnologies = styled.div`
  margin-top: 20px;
`;

const StyledTechnology = styled.p`
  margin-top: 5px;
  font-size: 1.4rem;
`;

const StyledLinkButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectsSection = (props) => {
  return (
    <StyledWrapper>
      <StyledSectionName>Pozostałe projekty</StyledSectionName>
      <StyledOtherProjects>
        {otherProjectsDescriptions.map((item, index) => (
          <StyledOtherProject key={index} id={item.id}>
            <div>
              <StyledHeader>
                <StyledFolderIcon src={folderIcon} alt="" />
                <ExternalLinks github={item.githubLink} />
              </StyledHeader>
              <StyledProjectTitle>{item.title}</StyledProjectTitle>
              <StyledTechnologies>
                {item.technologies.map((item, index) => (
                  <StyledTechnology key={index}>{item}</StyledTechnology>
                ))}
              </StyledTechnologies>
            </div>
            <StyledLinkButtonWrapper>
              <LinkButton link={item.path}>SZCZEGÓŁY</LinkButton>
            </StyledLinkButtonWrapper>
          </StyledOtherProject>
        ))}
      </StyledOtherProjects>
    </StyledWrapper>
  );
};

export default ProjectsSection;
