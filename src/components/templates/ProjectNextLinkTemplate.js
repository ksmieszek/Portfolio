import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowSign from "components/atoms/ArrowSign";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;

  @media (min-width: 1440px) {
    margin-top: 200px;
    margin-bottom: 100px;
  }
`;

const StyledLinkWrapper = styled(Link)`
  position: relative;
  padding: 20px 20px;
  max-width: fit-content;
  font-size: ${(props) => props.theme.fontSize.m};
  z-index: 1;
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 70px;
    height: 70px;
    transform: translate(0, -50%);
    display: block;
    border-radius: 50px;
    background-color: #2979ff;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

const StyledArrowSign = styled(ArrowSign)`
  margin-left: 10px;
  margin-right: 5px;
  border-color: white;
`;

const ProjectNextLinkTemplate = ({ link }) => {
  return (
    <StyledWrapper>
      <StyledLinkWrapper to={link}>
        Następny projekt
        <StyledArrowSign />
      </StyledLinkWrapper>
    </StyledWrapper>
  );
};

export default ProjectNextLinkTemplate;
