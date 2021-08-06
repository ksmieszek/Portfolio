import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "components/organisms/Hero";
import ProjectsSection from "components/organisms/ProjectsSection";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 80%;
  height: 700px;
  background-color: #555;
`;

const Home = ({ setActiveNavLink }) => {
  //determine wchich scroll animation to fire depending on previous presence of user
  const [scrollFromThisPage, setScrollFromThisPage] = useState(false);

  let history = useHistory();

  const WrapperEl = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const sectionRefs = [section1Ref, section2Ref, section3Ref];

  useEffect(() => {
    //if there is need to scroll to section
    if (window.location.hash !== "") {
      const domRect = document.querySelector(window.location.hash).offsetTop;
      const summary = domRect;

      //run on first entrance on the page
      if (history.action === "POP") {
        gsap.set(window, { scrollTo: summary });
      } else if (history.action === "PUSH") {
        //animate scroll between sections on the same route
        if (scrollFromThisPage) {
          gsap.to(window, { duration: 0.7, scrollTo: summary });
          return;
        }
        //delay scroll animation when changing between two routes
        gsap.to(window, { delay: 3, duration: 0.7, scrollTo: summary });
      }
    }
    //next scroll animations with no delay
    setScrollFromThisPage(true);
  }, [history.location]);

  //sets active link when section appear in viewport
  useEffect(() => {
    sectionRefs.forEach((item) => {
      // const pointInViewport = `51px`;
      const pointInViewport = `150px`;
      gsap.to(item.current, {
        scrollTrigger: {
          trigger: item.current,
          start: "top " + pointInViewport,
          end: `bottom ` + pointInViewport,
          // markers: true,
          onToggle: (self) => {
            self.isActive && item.current?.id && setActiveNavLink(item.current.id);
          },
        },
      });
    });
  }, []);

  return (
    <div>
      <Wrapper ref={WrapperEl}>
        <Hero ref={section1Ref} />
        <ProjectsSection ref={section2Ref} />

        <Card id="contact" ref={section3Ref}>
          Contact
        </Card>
      </Wrapper>
    </div>
  );
};

export default Home;
