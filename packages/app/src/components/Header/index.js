import React from "react";
import HeaderContainer from "./HeaderContainer";
import LogoContainer from "./LogoContainer";
import Img from "../common/Img";
import Burger from "../common/Burger";
import LogoImg from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Img src={LogoImg} alt="TRA Robotics" />
      </LogoContainer>
      <Burger />
    </HeaderContainer>
  );
}
