import React from "react"
import styled from "styled-components"
import { blackColor } from "../../constants/styled-variables"

const StyledH2 = styled.h2`
  font-size: 28px;
  line-height: 32px;
  color: ${blackColor};
`

const H2 = ({ children, ...props }) => {
  return <StyledH2 {...props}>{children}</StyledH2>
}

export default H2
