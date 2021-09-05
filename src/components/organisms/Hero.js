import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import signature from "assets/signature.svg";
import { gsap } from "gsap";

const StyledWrapper = styled.div`
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

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f7e018;
`;

const StyledName = styled.img`
  height: 40px;
  margin: 5px 0;
  user-select: none;

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
  font-size: 1.8rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1440px) {
    margin: 10px 0;
    font-size: 2.5rem;
  }
`;

const StyledContactLink = styled(Link)`
  margin-top: 50px;
  padding: 15px 50px;
  border: 2px solid #f7e018;
  border-radius: 50px;
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.2s ease;
  opacity: 0;
  visibility: hidden;

  &:hover {
    background-color: #f7e018;
    color: #34333b;
  }

  @media (min-width: 768px) {
    padding: 20px 70px;
    font-size: 2rem;
  }
`;

const Hero = React.forwardRef((props, ref) => {
  const textOverla1 = useRef(null);
  const textOverla2 = useRef(null);
  const contactButton = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(textOverla1.current, { x: "110%", duration: 0.4, delay: 0.4 });
    tl.to(textOverla2.current, { x: "110%", duration: 0.4 }, "<");
    tl.to(contactButton.current, { autoAlpha: 1, delay: 0.5 });
  }, []);

  return (
    <StyledWrapper id="home" ref={ref}>
      <StyledHeroContent>
        <div>
          <StyledLineWrapper>
            <StyledOverlay ref={textOverla1} />
            <StyledName src={signature} alt="" />
          </StyledLineWrapper>
          <StyledLineWrapper>
            <StyledTextWrapper>
              <StyledOverlay ref={textOverla2} />
              <StyledTitle>Junior Frontend Developer</StyledTitle>
            </StyledTextWrapper>
          </StyledLineWrapper>
        </div>
        <StyledContactLink to="#contact" ref={contactButton}>
          Kontakt
        </StyledContactLink>
      </StyledHeroContent>
    </StyledWrapper>
  );
});

export default Hero;
