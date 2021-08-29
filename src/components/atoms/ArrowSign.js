import styled, { css } from "styled-components";

const StyledArrow = styled.span`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  border-top: 2px solid rgb(247, 224, 24);
  border-left: 2px solid rgb(247, 224, 24);
  transform: rotate(135deg);

  ${(props) =>
    props.small &&
    css`
      width: 7px;
      height: 7px;
      border-color: #b0b2c3;
    `}
`;

export default StyledArrow;
