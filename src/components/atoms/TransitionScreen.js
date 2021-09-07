import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const StyledCoverContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(100%);
  background-color: #34333b;
  z-index: 999;
`;

const StyledCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgb(247, 224, 24); */
  background-color: #2979ff;
`;

const TransitionScreen = ({ fromLeft }) => {
  let history = useHistory();
  const CoverContainer = useRef(null);
  const Cover = useRef(null);

  useEffect(() => {
    if (history.action === "POP") return;

    let transformOrigin = "left";
    let moveOnXAxis = "100vw";
    let scrollTo = 0;

    if (window.location.hash !== "") {
      const topOfElement = document.querySelector(window.location.hash).offsetTop;
      scrollTo = topOfElement;
    }

    if (fromLeft) {
      transformOrigin = "right";
      moveOnXAxis = "-100vw";
    }

    const currentScrollPositionToRestore = document.documentElement.scrollTop;
    //set window scroll to 0 so ScrollTrigger takes top of viewport as initial position instead of current scroll position
    gsap.set(window, { scrollTo: 0 });
    //back to previous scroll position asap
    gsap.set(window, { scrollTo: currentScrollPositionToRestore, delay: 0.01 });

    const tl = gsap.timeline({
      defaults: { ease: "power1.out" },
    });
    tl.to(Cover.current, { scaleX: 0, transformOrigin: transformOrigin, duration: 0.4 }, "0.9");
    tl.to(Cover.current, { scaleX: 1, duration: 0.6 }, ">0.4");
    tl.to(window, { scrollTo: scrollTo });
    tl.fromTo(CoverContainer.current, { x: "0" }, { x: moveOnXAxis, duration: 0.4 }, "<");
  }, []);

  return (
    <StyledCoverContainer ref={CoverContainer}>
      <StyledCover ref={Cover}></StyledCover>
    </StyledCoverContainer>
  );
};

export default TransitionScreen;
