import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 320px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  clip-path: polygon(100% 0, 100% calc(100% - 40px), 67% 100%, 0 calc(100% - 40px), 0 0);
`;

const StyledButton = styled.div`
  margin-top: 30px;
  padding: 8px 15px;
  border-radius: 10px;
  background-color: white;
  font-weight: bold;
  text-align: center;
`;

const Hero = React.forwardRef((props, ref) => {
  return (
    <StyledWrapper id="home" ref={ref}>
      <div>
        <h2>Karol Śmieszek</h2>
        <h4>Front end developer</h4>
      </div>
      <StyledButton>Kontakt</StyledButton>
    </StyledWrapper>
  );
});

export default Hero;
