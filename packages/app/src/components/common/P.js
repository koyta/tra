import React from "react";
import styled from "styled-components";
import { blackColor } from "../../constants/styled-variables";

const StyledP = styled.p`
  font-size: 13px;
  color: ${blackColor};
  letter-spacing: 0.2px;
`;

export default function P({ children, ...props }) {
  return <StyledP {...props}>{children}</StyledP>;
}
