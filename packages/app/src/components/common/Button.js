import React, { PureComponent } from "react";
import styled from "styled-components";
import { grayColor, blackColor } from "../../constants/styled-variables";

const StyledButton = styled.button`
  border: 0;

  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 4px;

  box-shadow: 0 5px 10px 0 rgba(22, 30, 46, 0.2);

  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: ${blackColor};

  cursor: pointer;

  transition: 0.3s;

  &::placeholder {
    color: ${grayColor};
  }

  &:hover,
  &:focus {
    box-shadow: 0 5px 10px 0 rgba(22, 30, 46, 0.4);
  }

  &:active {
    box-shadow: 0 2px 5px 0 rgba(22, 30, 46, 0.2);
  }

  outline: none;
`;

class Button extends PureComponent {
  handleClick = e => {
    if (typeof this.props.onClick === "function") {
      this.props.onClick(e);
    }
  };

  render() {
    return (
      <StyledButton {...this.props} onClick={this.handleClick}>
        {this.props.label}
      </StyledButton>
    );
  }
}

export default Button;
