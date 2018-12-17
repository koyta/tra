import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => `url(${props.src})`} no-repeat center;
  background-size: contain;

  height: 100%;
  width: 100%;
`;

const Img = ({ alt, ...props }) => {
  if (!alt) {
    return <StyledImg {...props} alt="" />;
  }

  return <StyledImg {...props} />;
};

export default Img;
