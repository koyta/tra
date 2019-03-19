import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./index"

storiesOf("button", module)
  .add("default", () => <Button label="default button" />)
  .add("with onClick function", () => (
    <Button onClick={() => alert("boop")} label="Click to boop" />
  ))
  .add("in container", () => (
    <Button label="Boop" style={{ height: 50, width: 200 }} />
  ))
  .add("disabled", () => (
    <Button
      disabled
      label="Oh no"
      style={{ height: 50, width: 200 }}
      onClick={() => alert("should not work")}
    />
  ))
