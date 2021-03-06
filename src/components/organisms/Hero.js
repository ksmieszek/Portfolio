import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import signature from "assets/signature.svg";
import { gsap } from "gsap";
import ArrowSign from "components/atoms/ArrowSign";

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34333b;
`;

const StyledHeroContent = styled.div`
  transform: translateY(-70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLineWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
`;

const StyledTextWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const StyledLineOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-110%);
  background-color: #f7e018;
`;

const StyledName = styled.img`
  height: 45px;
  margin: 5px 0;
  user-select: none;
  opacity: 0;
  visibility: hidden;

  @media (min-width: 450px) {
    height: 50px;
  }

  @media (min-width: 768px) {
    height: 55px;
  }

  @media (min-width: 1440px) {
    height: 70px;
    margin: 10px 0;
  }
`;

const StyledTitle = styled.h3`
  margin: 5px 0;
  font-size: ${(props) => props.theme.fontSize.s};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  opacity: 0;
  visibility: hidden;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.l};
  }

  @media (min-width: 1440px) {
    margin: 10px 0;
  }
`;

const StyledCVLink = styled.a`
  margin-top: 50px;
  padding: 15px 50px;
  border: 2px solid #f7e018;
  border-radius: 50px;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  letter-spacing: 2px;
  transition: all 0.2s ease;
  opacity: 0;
  visibility: hidden;

  &:hover {
    background-color: #f7e018;
    color: #34333b;
  }

  @media (min-width: 768px) {
    padding: 20px 70px;
    font-size: ${(props) => props.theme.fontSize.m};
  }
`;

const StyledArrowSign = styled(ArrowSign)`
  display: block;
  margin: 0;
  width: 10px;
  height: 10px;
  border-width: 3px;
  border-color: #34333b;
  transform-origin: center;
  transform: rotate(225deg);
`;

const StyledScrollDownLink = styled(Link)`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #f7e018;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7e018;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;

  &:hover {
    background-color: #34333b;
  }

  &:hover ${StyledArrowSign} {
    border-color: #f7e018;
  }
`;

const Hero = React.forwardRef((props, ref) => {
  const firstLineOverlay = useRef(null);
  const secondLineOverlay = useRef(null);
  const firstLine = useRef(null);
  const secondLine = useRef(null);
  const cvLink = useRef(null);
  const scrollDownLink = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo([firstLineOverlay.current, secondLineOverlay.current], { x: "-110%", duration: 0.8 }, { x: "110%" }, "1");
    tl.to([firstLine.current, secondLine.current], { autoAlpha: 1, duration: 0 }, "-=.4");
    tl.to(cvLink.current, { autoAlpha: 1 }, "+=.5");
    tl.to(scrollDownLink.current, { autoAlpha: 1 }, "<");
  }, []);

  return (
    <StyledWrapper id="home" ref={ref}>
      <StyledHeroContent>
        <div>
          <StyledLineWrapper>
            <StyledLineOverlay ref={firstLineOverlay} />
            <StyledName ref={firstLine} src={signature} alt="" />
          </StyledLineWrapper>
          <StyledLineWrapper>
            <StyledTextWrapper>
              <StyledLineOverlay ref={secondLineOverlay} />
              <StyledTitle ref={secondLine}>Junior React Developer</StyledTitle>
            </StyledTextWrapper>
          </StyledLineWrapper>
        </div>
        <StyledCVLink ref={cvLink} href="https://drive.google.com/uc?id=1QCwMLxghbjOCKBbPA8sXj17RMOmklxDv&export=download">
          CV
        </StyledCVLink>
      </StyledHeroContent>
      <StyledScrollDownLink to="#about" ref={scrollDownLink}>
        <StyledArrowSign />
      </StyledScrollDownLink>
    </StyledWrapper>
  );
});

export default Hero;
