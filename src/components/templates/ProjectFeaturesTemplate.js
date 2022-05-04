import React from "react";
import styled from "styled-components";
import SectionTitle from "components/atoms/SectionTitle";
import { theme } from "theme";

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledFeaturesWrapper = styled.div`
  width: 100%;
  margin: 60px auto 0;
  margin-top: ${(props) => props.distanceOut && "160px"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFeaturesList = styled.ul`
  padding: 0 30px;
`;

const StyledFeature = styled.li`
  width: 100%;
  margin: 25px 0;
  font-size: ${(props) => props.theme.fontSize.xxs};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xs};
  }
`;

const ProjectFeaturesTemplate = ({ features, title = "Cechy projektu", distanceOut = false }) => {
  return features ? (
    <StyledWrapper>
      <StyledFeaturesWrapper distanceOut={distanceOut}>
        <SectionTitle fontSize={theme.fontSize.m}>{title}</SectionTitle>
        <StyledFeaturesList>
          {features.map((item, index) => (
            <StyledFeature key={index}>{item}</StyledFeature>
          ))}
        </StyledFeaturesList>
      </StyledFeaturesWrapper>
    </StyledWrapper>
  ) : null;
};

export default ProjectFeaturesTemplate;
