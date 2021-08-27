import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledWrapper = styled.div`
  width: 100%;
  /* height: 320px; */
  height: 100vh;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #34333b;
  /* clip-path: polygon(100% 0, 100% calc(100% - 40px), 67% 100%, 0 calc(100% - 40px), 0 0); */

  @media (min-width: 1440px) {
    /* height: 700px; */
    /* clip-path: polygon(100% 0, 100% calc(100% - 120px), 67% 100%, 0 calc(100% - 120px), 0 0); */
  }
`;

const StyledName = styled.h1`
  font-size: 3rem;
`;
const StyledTitle = styled.h2`
  font-size: 2rem;
`;

const Hero = React.forwardRef((props, ref) => {
  return (
    <StyledWrapper id="home" ref={ref}>
      <div>
        <StyledName>Karol Śmieszek</StyledName>
        <StyledTitle>Front end developer</StyledTitle>
      </div>
    </StyledWrapper>
  );
});

export default Hero;
