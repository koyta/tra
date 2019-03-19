import React from "react"
import { storiesOf } from "@storybook/react"
import Paragraph from "./index"

storiesOf("paragraph", module).add("default", () => (
  <Paragraph>
    Etiam maximus magna bibendum tellus tincidunt maximus. In diam dui, iaculis
    at condimentum sit amet, placerat quis elit. Nulla facilisi. Vivamus ut
    volutpat lectus, eu semper mauris. Ut tempor malesuada lectus sed
    vestibulum. Praesent eu ultrices odio, at aliquam diam.{" "}
  </Paragraph>
))
