import React, { Component } from "react"
import styled from "styled-components"
import { blackColor, grayColorRGBA } from "../../constants/styled-variables"

const StyledTextarea = styled.textarea`
  border: 1px solid ${grayColorRGBA(0.3)};
  display: flex;
  height: 100%;
  width: 100%;
  padding: 12px 14px;
  border-radius: 20px;

  font-size: 17px;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${blackColor};

  transition: 0.3s;

  &::placeholder {
    color: ${grayColorRGBA(0.3)};
  }

  &:hover,
  &:focus {
    border-color: ${blackColor};
  }

  &:focus {
    outline: none;
  }

  resize: none;
`

export default class Textarea extends Component {
  handleChange = e => {
    if (typeof this.props.onChange !== "function") return

    const { name, value } = e.target
    this.props.onChange(value, name, e)
  }

  handleFocus = e => {
    if (typeof this.props.onFocus !== "function") return

    const { name } = e.target
    this.props.onFocus(name, e)
  }

  handleBlur = e => {
    if (typeof this.props.onBlur !== "function") return

    const { name } = e.target
    this.props.onBlur(name, e)
  }

  render() {
    return (
      <StyledTextarea
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...this.props}
      />
    )
  }
}
