import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { grayColor, blackColor } from "../../constants/styled-variables";

const StyledA = styled.a`
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.2px;
  color: ${grayColor};
  text-decoration: underline;

  transition: 0.3s;

  &:hover,
  &:focus {
    color: ${blackColor};
  }

  outline: none;
`;

export default function({ href, to, children, ...props }) {
  if (to) {
    return (
      <StyledA as={Link} to={to} {...props}>
        {children}
      </StyledA>
    );
  }

  return (
    <StyledA href={href} {...props}>
      {children}
    </StyledA>
  );
}
