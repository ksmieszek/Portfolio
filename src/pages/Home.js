import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import TransitionScreen from "components/atoms/TransitionScreen";
import Hero from "components/organisms/Hero";
import ProjectsSectionTemplate from "templates/ProjectsSectionTemplate";
import Contact from "components/organisms/Contact";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = ({ setActiveNavLink }) => {
  let history = useHistory();
  //determine wchich scroll animation to fire depending on previous presence of user
  const [scrollFromThisPage, setScrollFromThisPage] = useState(false);
  const heroSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const sectionRefs = [heroSectionRef, projectsSectionRef, contactSectionRef];

  useEffect(() => {
    //if there is need to scroll to section
    if (window.location.hash !== "") {
      const topOfElement = document.querySelector(window.location.hash).offsetTop;

      //run on first entrance on the page
      if (history.action === "POP") {
        gsap.set(window, { scrollTo: topOfElement });
      } else if (history.action === "PUSH") {
        //animate scroll between sections on the same route
        if (scrollFromThisPage) {
          gsap.to(window, { duration: 0.7, scrollTo: topOfElement });
          return;
        }
      }
    }
    //next scroll animations with no delay
    setScrollFromThisPage(true);
  }, [history.location]);

  //sets active link when section appear in viewport
  useEffect(() => {
    sectionRefs.forEach((item) => {
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
      <TransitionScreen fromLeft />
      <StyledWrapper>
        <Hero ref={heroSectionRef} />
        <ProjectsSectionTemplate ref={projectsSectionRef} setActiveNavLink={setActiveNavLink} />
        <Contact ref={contactSectionRef} />
      </StyledWrapper>
    </div>
  );
};

export default Home;
