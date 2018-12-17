import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { grayColor, blackColor } from "../../constants/styled-variables";
import Img from "./Img";
import BurgerImg from "../../assets/images/burger.svg";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const MenuButton = styled.button.attrs({
  type: "button"
})`
  border: 0;
  box-shadow: none;
  outline: none;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 0;
`;

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  width: 240px;
  border: 1px solid ${grayColor};
  padding: 10px 16px;
  background-color: white;

  position: absolute;
  top: 100%;
  right: 0;

  transform: translateY(${props => (props.isOpen ? 0 : -10)}px);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};

  transition: transform 0.3s, opacity 0.3s;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  width: 100%;
  font-size: 18px;
  line-height: 36px;
  color: ${grayColor};
  opacity: 0.7;

  &:hover,
  &:focus {
    color: ${blackColor};
    opacity: 1;
  }

  transition: color 0.3s, opacity 0.3s;
`;

export default class Burger extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.node = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleMenuClick, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleMenuClick, false);
  };

  handleMenuClick = e => {
    if (this.node.current.contains(e.target)) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
      return;
    }

    // Handle click outside
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div ref={this.node}>
        <Container>
          <MenuButton>
            <Img src={BurgerImg} />
          </MenuButton>
          <MenuList isOpen={this.state.isOpen}>
            <li>
              <StyledLink to="/main">Main</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Careers</StyledLink>
            </li>
            <li>
              <StyledLink to="/offices">Offices</StyledLink>
            </li>
          </MenuList>
        </Container>
      </div>
    );
  }
}
