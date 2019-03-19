import React, { PureComponent } from "react"
import styled from "styled-components"
import {
  grayColor,
  blackColor,
  grayColorRGBA,
  blackColorRGBA
} from "../../../app/src/constants/styled-variables"

export const StyledInput = styled.input`
  border: 1px solid ${grayColorRGBA(0.3)};
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px 14px;
  border-radius: 20px;

  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: ${blackColor};

  transition: 0.3s;

  &::placeholder {
    color: ${grayColorRGBA(0.3)};
  }

  &:hover,
  &:focus {
    opacity: 1;
    border-color: ${blackColor};
  }

  outline: none;
`

const StyledFileInput = styled.input`
  display: none;
`

const StyledFileInputLabel = styled.label`
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: ${grayColor};
  text-decoration: underline;
  cursor: pointer;

  transition: 0.3s;

  &:hover,
  &:focus {
    color: ${blackColor};
  }
`

class InputComponent extends PureComponent {
  handleChange = e => {
    e.preventDefault()

    if (typeof this.props.onChange !== "function") {
      return
    }

    this.props.onChange(e)
  }

  handleFocus = e => {
    if (typeof this.props.onFocus !== "function") {
      return
    }

    this.props.onFocus(e)
  }

  handleBlur = e => {
    if (typeof this.props.onBlur !== "function") {
      return
    }

    this.props.onBlur(e)
  }

  handleMouseOver = e => {
    if (typeof this.props.onMouseOver !== "function") {
      return
    }

    this.props.onMouseOver(e)
  }

  render() {
    const { type } = this.props
    if (type === "file") {
      const rand = Math.random()
      return (
        <>
          <StyledFileInput
            id={rand.toString()}
            tabIndex={0}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            {...this.props}
          />
          <StyledFileInputLabel htmlFor={rand.toString()}>
            {this.props.label}
          </StyledFileInputLabel>
        </>
      )
    }
    return (
      <StyledInput
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        {...this.props}
      />
    )
  }
}

export default InputComponent
