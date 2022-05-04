import styled from "styled-components";
import SectionTitle from "components/atoms/SectionTitle";
import { theme } from "theme";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDetailsWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    padding-top: 50px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const StyledDetailWrapper = styled.div`
  max-width: 80%;
  padding-top: 30px;
  align-self: center;

  @media (min-width: 1024px) {
    width: 50%;
    max-width: 50%;
    padding-top: 0;
    display: flex;

    &:nth-child(odd) {
      padding-bottom: 200px;
      padding-right: 50px;
      align-self: flex-start;
      justify-content: flex-end;
    }

    &:nth-child(even) {
      padding-left: 50px;
      align-self: flex-end;
      justify-content: flex-start;
    }

    &:last-child {
      padding-bottom: 0px;
    }

    &:only-child {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: 1440px) {
    &:nth-child(odd) {
      padding-right: 100px;
    }
    &:nth-child(even) {
      padding-left: 100px;
    }
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  max-width: 600px;
  max-height: 350px;

  @media (min-width: 1440px) {
    max-height: 600px;
  }
`;

const ProjectInteractionsTemplate = ({ videos }) => {
  return (
    <StyledWrapper>
      <SectionTitle fontSize={theme.fontSize.m}>Komponenty interfejsu oraz interakcje z nimi</SectionTitle>
      <StyledDetailsWrapper>
        {videos.map((item, index) => (
          <StyledDetailWrapper key={index}>
            <StyledVideo controls autoPlay muted loop>
              <source src={item} type="video/mp4" />
            </StyledVideo>
          </StyledDetailWrapper>
        ))}
      </StyledDetailsWrapper>
    </StyledWrapper>
  );
};

export default ProjectInteractionsTemplate;
