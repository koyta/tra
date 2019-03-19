import styled from "styled-components"
import { blackColor, grayColor } from "../../constants/styled-variables"
import { transparentize } from "polished"

export const ArrowIcon = styled.div`
  position: absolute;
  top: 17px;
  right: 17px;
  height: 5px;
  width: 10px;

  transition: 0.3s;
`

export const Option = styled.li`
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
`

export const Container = styled.ul`
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
`
