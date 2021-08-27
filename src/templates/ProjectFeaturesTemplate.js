import React from "react";
import styled from "styled-components";
import SectionTitle from "components/atoms/SectionTitle";

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledFeaturesWrapper = styled.div`
  width: 100%;
  margin: 60px auto 0;
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
  font-size: 1.4rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ProjectFeaturesTemplate = ({ features }) => {
  return features ? (
    <StyledWrapper>
      <StyledFeaturesWrapper>
        <SectionTitle>Cechy projektu</SectionTitle>
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
