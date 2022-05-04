import React from "react";
import SectionTitle from "components/atoms/SectionTitle";
import styled from "styled-components";
import { theme } from "theme";
import profile from "assets/images/profile.jpg";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  padding: 70px 0 140px;

  @media (min-width: 1440px) {
    max-width: 1000px;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 120px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const StyledParagraph = styled.p`
  max-width: 600px;
  font-size: ${(props) => props.theme.fontSize.s};
  line-height: 1.6;
`;

const StyledImage = styled.img`
  margin-top: 50px;
  max-height: 400px;
  max-width: 300px;
  display: block;
  border-radius: 3px;
  object-fit: cover;
  user-select: none;
  filter: drop-shadow(5px 5px 2px rgba(253, 224, 24, 1));

  @media (min-width: 768px) {
    margin: 0 30px;
  }
`;

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <StyledWrapper id="about" ref={ref}>
      <SectionTitle fontSize={theme.fontSize.xxl} withDot>
        O mnie
      </SectionTitle>
      <StyledInnerWrapper>
        <StyledParagraph>
          Nazywam się Karol Śmieszek. Mieszkam w okolicach Krakowa i niedawno ukończyłem informatykę na uczelni wyższej WSB-NLU. Program nauczania
          uniwersytetu zmusił mnie do poznania wielu nowych technologii i języków, z czego wiodącym był C# i jego ekosystem. Nie byłem nimi
          szczególnie zainteresowany, ale dzięki temu poszerzyłem swoją wiedzę z zakresu backendu. Na co dzień tworzę projekty korzystając z
          najnowszych i sprawdzonych technologii frontendowych.
        </StyledParagraph>
        <StyledImage src={profile} alt="" />
      </StyledInnerWrapper>
    </StyledWrapper>
  );
});

export default AboutMe;
