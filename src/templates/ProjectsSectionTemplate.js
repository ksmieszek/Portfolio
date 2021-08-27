import React from "react";
import projectsDescriptions from "utils/ProjectsDescriptions";
import styled from "styled-components";
import ExternalLinks from "components/molecules/ExternalLinks";
import LinkButton from "components/atoms/LinkButton";

const StyledWrapper = styled.div`
  width: 100%;
  /* margin: 50px 0; */
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #34333b;
  /* clip-path: polygon(33% 0, 100% 40px, 100% calc(100% - 40px), 67% 100%, 0 calc(100% - 40px), 0 40px); */

  @media (min-width: 1440px) {
    /* clip-path: polygon(33% 0, 100% 120px, 100% calc(100% - 120px), 67% 100%, 0 calc(100% - 120px), 0 120px); */
  }
`;

const StyledProjectWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    width: auto;
    max-width: 1400px;
    padding: 120px 0 80px 0;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 25px;
  /* filter: drop-shadow(1px 1px 0px rgba(253, 224, 24, 1)); */
  filter: drop-shadow(5px 5px 2px rgba(253, 224, 24, 1));
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: 50vw;
  max-height: 450px;
  border-radius: 5px;
  clip-path: polygon(100% 0, 100% 85%, 85% 100%, 0 100%, 0 0);
  /* box-shadow: rgb(0 0 0 / 20%) 0px 5px 30px; */

  @media (min-width: 1440px) {
    /* box-shadow: -10px -10px 0px 0px #ddd, rgb(0 0 0 / 20%) 0px 5px 30px; */
  }
`;

const StyledContent = styled.div`
  max-width: 800px;
  font-size: 1.6rem;

  @media (min-width: 1440px) {
    padding-top: 25px;
    padding-right: 25px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2.9rem;
  font-weight: 500;

  @media (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

const StyledDescription = styled.div`
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    max-width: 450px;
    margin-bottom: 50px;
    line-height: 1.4;
  }
`;

const StyledTechnologiesWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledTechnologiesTitle = styled.p`
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

const StyledTechnologiesIcons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

const StyledTechnologyIconWrapper = styled.div`
  position: relative;
  margin: 10px 30px 10px 0;
`;

const StyledTechnologyIcon = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
  @media (min-width: 1024px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1440px) {
    width: 45px;
    height: 45px;
  }
`;

const StyledTechnologyIconDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  padding: 5px 10px;
  border-radius: 10px;
  display: none;
  font-size: 12px;
  background-color: #42414d;
  z-index: 2;

  ${StyledTechnologyIconWrapper}:hover & {
    display: block;
  }
`;

const StyledLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1440px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto;
  }
`;

const StyledExternalLinksWrapper = styled.div`
  @media (min-width: 1440px) {
    margin-right: 100px;
  }
`;

const ProjectsSection = React.forwardRef((props, ref) => {
  const handleRouteChange = (path) => {
    // setActiveNavLink(null);
  };

  return (
    <StyledWrapper id="projects" ref={ref}>
      {projectsDescriptions.map((item) => {
        return (
          <StyledProjectWrapper id={item.id} key={item.id}>
            <StyledContent>
              <StyledTitle>{item.title}</StyledTitle>
              <StyledDescription>{item.description}</StyledDescription>
              <StyledTechnologiesWrapper>
                <StyledTechnologiesTitle>Użyte technologie:</StyledTechnologiesTitle>
                <StyledTechnologiesIcons>
                  {item.technologies.map((item, index) => (
                    <StyledTechnologyIconWrapper key={index}>
                      <StyledTechnologyIcon src={item.icon} alt="" />
                      <StyledTechnologyIconDescription>{item.name}</StyledTechnologyIconDescription>
                    </StyledTechnologyIconWrapper>
                  ))}
                </StyledTechnologiesIcons>
              </StyledTechnologiesWrapper>
            </StyledContent>
            <StyledImageWrapper>
              <StyledImage src={item.image} alt="" />
            </StyledImageWrapper>
            <StyledLinksWrapper>
              <StyledExternalLinksWrapper>
                <ExternalLinks github="https://github.com/" site="https://github.com/" />
              </StyledExternalLinksWrapper>
              <LinkButton link={item.path}>SZCZEGÓŁY</LinkButton>
            </StyledLinksWrapper>
          </StyledProjectWrapper>
        );
      })}
    </StyledWrapper>
  );
});

export default ProjectsSection;
