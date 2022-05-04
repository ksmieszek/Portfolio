import React from "react";
import styled from "styled-components";
import contactGithubIcon from "assets/icons/contact-github.svg";
import contactEmailIcon from "assets/icons/contact-email.svg";
import contactPhoneIcon from "assets/icons/contact-phone.svg";
import SectionTitle from "components/atoms/SectionTitle";
import { theme } from "theme";

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
  margin-right: 20px;
`;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  &:hover {
    box-shadow: rgb(255 255 255) 0px 0px 30px -10px;
  }
`;

const StyledLinkName = styled.span`
  font-size: ${(props) => props.theme.fontSize.s};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const StyledLinkDescription = styled.p`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.xs};
`;

const Contact = React.forwardRef((props, ref) => {
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
      link: "tel:508 550 089",
    },
  ];

  return (
    <StyledWrapper id="contact" ref={ref}>
      <SectionTitle fontSize={theme.fontSize.xxl} withDot>
        Kontakt
      </SectionTitle>
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
