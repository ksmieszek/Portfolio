import React, { useEffect } from "react";
import { mainProjectsDescriptions, otherProjectsDescriptions } from "utils/ProjectsDescriptions";
import styled from "styled-components";
import OtherProjectsTemplate from "templates/OtherProjectsTemplate";
import ExternalLinks from "components/molecules/ExternalLinks";
import LinkButton from "components/atoms/LinkButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledWrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #34333b;
`;

const StyledSectionName = styled.h2`
  margin: 50px 0;
  font-size: 4rem;
  font-weight: 500;

  @media (min-width: 1440px) {
    font-size: 5rem;
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
    width: 1275px;
    max-width: 1275px;
    padding: 120px 0 80px 0;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 25px;
  filter: drop-shadow(5px 5px 2px rgba(253, 224, 24, 1));
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50vw;
  max-height: 450px;
  border-radius: 5px;
  clip-path: polygon(100% 0, 100% 85%, 85% 100%, 0 100%, 0 0);
`;

const StyledContent = styled.div`
  max-width: 800px;
  font-size: 1.6rem;

  @media (min-width: 1440px) {
    width: 475px;
    padding-top: 25px;
    padding-right: 25px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2.4rem;
  font-weight: 500;

  @media (min-width: 1440px) {
    margin-bottom: 50px;
    font-size: 2.9rem;
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
  white-space: nowrap;

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
    margin-right: 50px;
  }
`;

const ProjectsSection = React.forwardRef((props, ref) => {
  const handleRouteChange = function () {
    props.setActiveNavLink(null);
  };

  useEffect(() => {
    [...ref.current.children].forEach((item) => {
      gsap.from(item, {
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <StyledWrapper id="projects" ref={ref}>
      <StyledSectionName>Projekty</StyledSectionName>
      {mainProjectsDescriptions.map((item) => {
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
                <ExternalLinks github={item.githubLink} site={item.siteLink} />
              </StyledExternalLinksWrapper>
              <LinkButton link={item.path} onClick={handleRouteChange}>
                SZCZEGÓŁY
              </LinkButton>
            </StyledLinksWrapper>
          </StyledProjectWrapper>
        );
      })}
      <OtherProjectsTemplate projects={otherProjectsDescriptions} />
    </StyledWrapper>
  );
});

export default ProjectsSection;
