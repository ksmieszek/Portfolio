import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const StyledWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  background-color: aqua;
`;

const One = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Two = styled.div`
  width: 100%;
  height: calc(200vh - 50px);
  background-color: orange;
`;

const About = () => {
  let history = useHistory();
  const ImgContainer = useRef(null);

  useEffect(() => {
    const ImgContainerEl = ImgContainer.current;
    const tl = gsap.timeline();
    tl.fromTo(ImgContainerEl, { x: "0" }, { duration: 0.7, x: "-100%" });
    tl.to(window, { scrollTo: 0 });
  }, []);

  return (
    <>
      <StyledWrapper>
        <One ref={ImgContainer}>
          <h1>Img</h1>
        </One>
        <Two>
          <h1>About</h1>
          <div onClick={() => history.push("/#aboutProject")}>do skecja1</div>
        </Two>
      </StyledWrapper>
    </>
  );
};

export default About;
