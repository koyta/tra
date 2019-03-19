import React from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { grayColor, blackColor } from "../../constants/styled-variables";
import Img from "ui/components/Img";
import BurgerImg from "../../assets/images/burger.svg";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const MenuButton = styled.button.attrs({
  type: "button",
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
`;

const AnimatedMenuList = animated(MenuList);

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

const springFrom = { opacity: 0, y: -10 };
const springTo = { opacity: 1, y: 0 };

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.node = React.createRef();
  }

  handleMenuClick = e => {
    if (this.node.current.contains(e.target)) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
      return;
    }

    // Handle click outside
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div ref={this.node}>
        <Container>
          <MenuButton onClick={this.handleMenuClick} data-testid="burger-btn">
            <Img src={BurgerImg} />
          </MenuButton>
          <Transition
            native={true}
            items={isOpen}
            from={springFrom}
            enter={springTo}
            leave={springFrom}
          >
            {isOpen =>
              isOpen &&
              (({ y, opacity }) => (
                <AnimatedMenuList
                  data-testid="burger-list"
                  style={{
                    transform: y.interpolate(y => `translateY(${y}px)`),
                    opacity: opacity,
                  }}
                >
                  <li>
                    <StyledLink to="/main">Main</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/">Careers</StyledLink>
                  </li>
                  <li>
                    <StyledLink to="/offices">Offices</StyledLink>
                  </li>
                </AnimatedMenuList>
              ))
            }
          </Transition>
        </Container>
      </div>
    );
  }
}

export default Burger;
