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
  height: 70px;
  background-color: transparent;
  z-index: 998;
  pointer-events: none;

  @media (min-width: 1440px) {
    pointer-events: all;
    /* background-color: #34333b; */
  }
`;

const StyledBoxShadowWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
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
  background-color: #1b1f2d;
  pointer-events: all;
  font-size: 2rem;

  @media (min-width: 1440px) {
    position: static;
    height: 100%;
    max-width: 1440px;
    transform: translateY(0);
    margin: auto;
    /* padding: 0 200px; */
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1.6rem;
    background-color: transparent;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  width: 100%;
  padding: 30px;
  display: block;
  text-align: center;
  font-weight: 500;
  opacity: 0;
  color: #b0b2c3;

  @media (min-width: 1440px) {
    width: auto;
    padding: 10px 30px;
    opacity: 1;
  }

  &.active {
    color: white;
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
  z-index: 999;
  pointer-events: all;

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
  background-color: white;

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
    { name: "home", title: "Home" },
    { name: "projects", title: "Projekty" },
    { name: "contact", title: "Kontakt" },
  ];

  const [menuVisible, setMenuVisible] = useState(false);
  const navRef = useRef(null);
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);
  const boxShadowRef = useRef(null);

  //animate nav on scroll
  useEffect(() => {
    const animation1 = gsap.to(navRef.current, { backgroundColor: "#1c1d25", duration: 0.4, paused: true });
    const animation2 = gsap.to(boxShadowRef.current, { autoAlpha: 1, duration: 0.4, paused: true });
    const animation3 = gsap.to(hamburgerRef.current, { background: "black", duration: 0.2, paused: true });
    const HamburgerFisrtLineAnimation = gsap.to(hamburgerRef.current.children[0], { background: "white", duration: 0.2, paused: true });
    const HamburgerSecondLineAnimation = gsap.to(hamburgerRef.current.children[1], { background: "white", duration: 0.2, paused: true });

    ScrollTrigger.create({
      trigger: navRef.current,
      start: "bottom top",
      end: 9999 + "top",
      // end: () => {
      //   return ScrollTrigger.maxScroll(window) + 300;
      // },
      // markers: true,
      onToggle: (self) => {
        if (self.isActive) {
          if (window.innerWidth >= 1440) {
            animation1.play();
            animation2.play();
          } else {
            animation3.play();
            HamburgerFisrtLineAnimation.play();
            HamburgerSecondLineAnimation.play();
          }
        } else {
          animation1.reverse();
          animation2.reverse();
          animation3.reverse();
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
      <StyledBoxShadowWrapper ref={boxShadowRef} />
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
