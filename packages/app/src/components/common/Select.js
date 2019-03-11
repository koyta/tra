import React, { PureComponent } from "react";
import styled from "styled-components";
import { transparentize } from "polished";

import ArrowImg from "../../assets/images/small_arrow.svg";
import { blackColor, grayColor } from "../../constants/styled-variables";
import Img from "./Img";

const ArrowIcon = styled.div`
  position: absolute;
  top: 17px;
  right: 17px;
  height: 5px;
  width: 10px;

  transition: 0.3s;
`;

const Option = styled.li`
  display: block;
  width: 100%;
  padding: 0 14px;

  font-size: 17px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: 0.2px;
  color: ${props =>
    props.selected ? blackColor : transparentize(0.7, grayColor)};

  transition: 0.3s;

  &:hover,
  &:focus {
    opacity: 1;
    color: ${blackColor};
  }
`;

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 2px 0;

  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  border-radius: 20px;
  border: 1px solid ${transparentize(0.7, grayColor)};
  background-color: white;

  & > ${ArrowIcon} {
    opacity: 0.3;
    transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
  }

  transition: 0.3s;

  &:hover,
  &:focus {
    border-color: ${blackColor};

    & > ${ArrowIcon} {
      opacity: 1;
    }
  }
`;

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.node = React.createRef();
  }

  /**
   * Returns selected option to function in props and closing select
   */
  handleSelect = (option, e) => {
    this.setState({ isOpen: false });
    this.props.onSelect(option);
  };

  /**
   * If select is opened, then returns null to function in props and closing input
   * Else just closing select
   */
  handleReset = e => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
      this.props.onSelect(null);
    } else {
      this.setState({ isOpen: true });
    }
    this.node.current.blur();
  };

  render() {
    if (!this.props.options || this.props.options.length === 0) return null;

    const { isOpen } = this.state;
    const {
      optionToString,
      optionToKey,
      options,
      selected,
      placeholder,
    } = this.props;

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
          options.map(option => (
            <Option
              tabIndex={0}
              key={optionToKey(option)}
              onClick={e => this.handleSelect(option, e)}
            >
              {optionToString(option)}
            </Option>
          ))}
      </Container>
    );
  }
}

export default Select;
