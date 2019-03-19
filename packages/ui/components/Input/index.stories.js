import React from "react"
import { storiesOf } from "@storybook/react"
import styled, { css } from "styled-components"
import Input from "./index"

storiesOf("input", module)
  .add("default", () => <Input />)
  .add("in container", () => (
    <div style={{ maxWidth: 200 }}>
      <Input />
    </div>
  ))
  .add("file", () => <Input type="file" label="Load file" />)
  .add("with placeholder", () => (
    <Input type="text" placeholder="email@gmail.com" />
  ))
