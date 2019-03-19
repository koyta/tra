import React, { PureComponent } from "react"
import styled from "styled-components"
import { ArrowIcon, Container, Option } from "./styled"
import Img from "../Img"
import ArrowImg from "../../assets/images/small_arrow.svg"

class Select extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.node = React.createRef()
  }

  /**
   * Returns selected option to function in props and closing select
   */
  handleSelect = (option, e) => {
    this.setState({ isOpen: false })
    this.props.onSelect(option)
  }

  /**
   * If select is opened, then returns null to function in props and closing input
   * Else just closing select
   */
  handleReset = e => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
      this.props.onSelect(null)
    } else {
      this.setState({ isOpen: true })
    }
    this.node.current.blur()
  }

  render() {
    if (!this.props.options || this.props.options.length === 0) return null

    const { isOpen } = this.state
    const {
      optionToString,
      optionToKey,
      options,
      selected,
      placeholder
    } = this.props

    return (
      <Container onClick={this.open} isOpen={isOpen} filled={selected}>
        <ArrowIcon>
          <Img src={ArrowImg} />
        </ArrowIcon>
        <Option
          tabIndex={0}
          onClick={this.handleReset}
          ref={this.node}
          selected={selected}
        >
          {selected
            ? !isOpen
              ? optionToString(selected)
              : placeholder
            : placeholder}
        </Option>
        {isOpen &&
          options.map((option, i) => (
            <Option
              tabIndex={0}
              key={optionToKey(option)}
              onClick={e => this.handleSelect(option, e)}
            >
              {optionToString(option)}
            </Option>
          ))}
      </Container>
    )
  }
}

export default Select
