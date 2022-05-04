import React, { useEffect } from "react";
import styled from "styled-components";
import MainProjectsTemplate from "../templates/MainProjectsTemplate";
import OtherProjectsTemplate from "components/templates/OtherProjectsTemplate";
import SectionTitle from "components/atoms/SectionTitle";
import { theme } from "theme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledWrapper = styled.div`
  width: 100%;
  padding: 70px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #34333b;
`;

const Projects = React.forwardRef((props, ref) => {
  useEffect(() => {
    [...ref.current.children].forEach((item) => {
      gsap.from(item, {
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
        },
      });
    });
  }, []);

  return (
    <StyledWrapper id="projects" ref={ref}>
      <SectionTitle fontSize={theme.fontSize.xxl} withDot>
        Projekty
      </SectionTitle>
      <MainProjectsTemplate />
      <OtherProjectsTemplate />
    </StyledWrapper>
  );
});

export default Projects;
