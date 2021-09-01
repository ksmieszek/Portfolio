import React, { useEffect } from "react";
import styled from "styled-components";
import contactGithubIcon from "assets/icons/contact-github.svg";
import contactEmailIcon from "assets/icons/contact-email.svg";
import contactPhoneIcon from "assets/icons/contact-phone.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #34333b;

  @media (min-width: 1440px) {
    padding-top: 200px;
  }
`;

const StyledSectionName = styled.h2`
  font-size: 2.9rem;
  font-weight: 500;
`;

const StyledLinksWrapper = styled.div`
  max-width: 95%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledLinkWrapper = styled.div`
  margin-bottom: 10px;
  padding: 20px 10px;
  display: flex;
  align-items: center;

  @media (min-width: 1440px) {
    margin: 0 60px;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const StyledLinkName = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
`;

const StyledLinkDescription = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
`;

const Contact = React.forwardRef((props, ref) => {
  useEffect(() => {}, []);

  const links = [
    {
      icon: contactEmailIcon,
      name: "Email",
      description: "ksmieszek.kontakt@gmail.com",
      link: "mailto:ksmieszek.kontakt@gmail.com",
    },
    {
      icon: contactGithubIcon,
      name: "GitHub",
      description: "github.com/ksmieszek",
      link: "https://github.com/ksmieszek",
      target: "_blank",
    },
    {
      icon: contactPhoneIcon,
      name: "Telefon",
      description: "+48 508 550 089",
    },
  ];

  return (
    <StyledWrapper id="contact" ref={ref}>
      <StyledSectionName>Kontakt</StyledSectionName>
      <StyledLinksWrapper>
        {links.map((item, index) => (
          <StyledLinkWrapper key={index}>
            <StyledLink href={item.link} target={item.target}>
              <StyledIcon src={item.icon} alt="" />
            </StyledLink>
            <div>
              <StyledLinkName>{item.name}</StyledLinkName>
              <StyledLinkDescription>{item.description}</StyledLinkDescription>
            </div>
          </StyledLinkWrapper>
        ))}
      </StyledLinksWrapper>
    </StyledWrapper>
  );
});

export default Contact;
