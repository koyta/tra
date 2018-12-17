import React from "react";
import FooterContainer from "./FooterContainer";
import P from "../common/P";
import A from "../common/A";

export default function Footer() {
  return (
    <FooterContainer>
      <P style={{ padding: "23.5px 0", margin: 0 }}>
        Copyright © 2018, Tra Robotics ltd. All rights reserved.
      </P>
      <A href="https://google.com" target="_blank">
        Privacy policy
      </A>
    </FooterContainer>
  );
}
