import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  clip-path: polygon(33% 0, 100% 40px, 100% calc(100% - 40px), 67% 100%, 0 calc(100% - 40px), 0 40px);
`;

const Card = styled.div`
  height: 300px;
  width: 80%;
  margin: 20px 0;
  background-color: ${(props) => props.one === true && `#888`};
  background-color: ${(props) => props.two === true && `#555`};
`;

const Hero = React.forwardRef((props, ref) => {
  let history = useHistory();

  return (
    <StyledWrapper id="projects" ref={ref}>
      <Card id="aboutProject" one>
        <h2
          onClick={() => {
            // setActiveNavLink(null);
            history.push("/about");
          }}
        >
          about
        </h2>
      </Card>
      <Card id="usersProject" two>
        <h2
          onClick={() => {
            // setActiveNavLink(null);
            history.push("/users");
          }}
        >
          users
        </h2>
      </Card>
    </StyledWrapper>
  );
});

export default Hero;
