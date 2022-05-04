import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import TransitionScreen from "components/atoms/TransitionScreen";
import LinkButton from "components/atoms/LinkButton";
import { gsap } from "gsap";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #34333b;
`;

const StyledProjectContentWrapper = styled.div`
  width: 90%;
  max-width: 1600px;
  margin-top: 70px;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 75%;
  }

  @media (min-width: 1440px) {
    margin-top: 130px;
    width: 80%;
  }
`;

const ProjectContentTemplate = (props) => {
  let history = useHistory();
  const wrapperRef = useRef(null);

  useEffect(() => {
    let delay = 2.5;
    if (history.action === "POP") delay = 0.5;

    gsap.from(wrapperRef.current.children, {
      y: 30,
      autoAlpha: 0,
      duration: 0.4,
      stagger: 0.4,
      delay: delay,
    });
  }, []);

  return (
    <StyledWrapper>
      <TransitionScreen />
      <LinkButton link={`/#${props.projectId}`} back small>
        BACK
      </LinkButton>
      <StyledProjectContentWrapper ref={wrapperRef}>{props.children}</StyledProjectContentWrapper>
    </StyledWrapper>
  );
};

export default ProjectContentTemplate;
