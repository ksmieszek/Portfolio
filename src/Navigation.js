import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: transparent;
  /* background-color: yellow; */
  z-index: 9999;
`;

const StyledLinksWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;

  @media (min-width: 1440px) {
    position: static;
    height: 100%;
    padding: 0 200px;
    transform: translateY(0);
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  margin-bottom: 20px;
  padding: 10px;
  display: block;
  opacity: 0;
  color: gray;
  font-weight: bold;

  @media (min-width: 1440px) {
    margin: 0 20px;
    opacity: 1;
  }

  &.active {
    color: black;
    /* ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10px;
      width: 30px;
      height: 2px;
      background-color: gray;
    } */
  }
`;

const StyledHamburgerWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 40px;
  height: 35px;
  transform: translateY(-50%);
  background-color: transparent;

  @media (min-width: 1440px) {
    display: none;
  }
`;

const StyledLine = styled.span`
  position: absolute;
  top: 50%;
  right: 50%;
  width: 20px;
  height: 2px;
  display: block;
  background-color: black;

  ${(props) =>
    props.first &&
    css`
      transform: translate(50%, -3px);
    `}

  ${(props) =>
    props.second &&
    css`
      transform: translate(50%, 3px) scaleX(0.7);
      transform-origin: right;
    `}
`;

const Navigation = ({ activeNavLink }) => {
  const navLinks = [
    { name: "home", title: "Start" },
    { name: "projects", title: "Projects" },
    { name: "contact", title: "Contact" },
  ];

  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);

  //animate nav on scroll
  useEffect(() => {
    const animation1 = gsap.to(navLinksRef.current, { boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 8px", duration: 0.2, paused: true });
    const animation2 = gsap.to(hamburgerRef.current, { background: "black", duration: 0.2, paused: true });
    const HamburgerFisrtLineAnimation = gsap.to(hamburgerRef.current.children[0], { background: "white", duration: 0.2, paused: true });
    const HamburgerSecondLineAnimation = gsap.to(hamburgerRef.current.children[1], { background: "white", duration: 0.2, paused: true });

    ScrollTrigger.create({
      trigger: navRef.current,
      start: "bottom top",
      end: ScrollTrigger.maxScroll(window) + "top",
      // markers: true,
      onToggle: (self) => {
        if (self.isActive) {
          animation1.play();
          animation2.play();
          HamburgerFisrtLineAnimation.play();
          HamburgerSecondLineAnimation.play();
        } else {
          animation1.reverse();
          animation2.reverse();
          HamburgerFisrtLineAnimation.reverse();
          HamburgerSecondLineAnimation.reverse();
        }
      },
    });
  }, []);

  //animate nav on open/close action
  const handleMenu = () => {
    if (window.innerWidth >= 1440) return;

    const tl = gsap.timeline();

    const HamburgerFisrtLineAnimation = gsap.fromTo(
      hamburgerRef.current.children[0],
      {
        transformOrigin: "50% 50%",
        y: -3,
        rotation: 0,
        paused: true,
      },
      {
        y: 0,
        rotation: 45,
        duration: 0.2,
        paused: true,
      }
    );
    const HamburgerSecondLineAnimation = gsap.fromTo(
      hamburgerRef.current.children[1],
      {
        transformOrigin: "right 50%",
        y: 3,
        scaleX: 0.7,
        rotation: 0,
        paused: true,
      },
      {
        transformOrigin: "50% 50%",
        y: 0,
        scaleX: 1,
        rotation: -45,
        duration: 0.2,
        paused: true,
      }
    );

    if (!menuVisible) {
      document.body.style.overflow = "hidden";
      HamburgerFisrtLineAnimation.play();
      HamburgerSecondLineAnimation.play();
      tl.set(navLinksRef.current, { y: "+=100%" });
      tl.fromTo(navLinksRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 });
      tl.fromTo(navLinksRef.current.children, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1 });
    } else {
      document.body.style.overflow = "unset";
      HamburgerFisrtLineAnimation.reverse();
      HamburgerSecondLineAnimation.reverse();
      tl.to(navLinksRef.current, { autoAlpha: 0, duration: 0.3 });
      tl.set(navLinksRef.current, { y: "-=100%" });
    }
    setMenuVisible(!menuVisible);
  };

  return (
    <StyledNavWrapper ref={navRef}>
      <StyledLinksWrapper ref={navLinksRef}>
        {navLinks.map((item) => (
          <StyledNavLink isActive={() => activeNavLink === item.name} to={`/#${item.name}`} key={item.name} onClick={() => handleMenu()}>
            {item.title}
          </StyledNavLink>
        ))}
      </StyledLinksWrapper>
      <StyledHamburgerWrapper ref={hamburgerRef} onClick={() => handleMenu()}>
        <StyledLine first></StyledLine>
        <StyledLine second></StyledLine>
      </StyledHamburgerWrapper>
    </StyledNavWrapper>
  );
};

export default Navigation;
