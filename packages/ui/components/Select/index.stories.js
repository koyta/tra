import React from "react"
import { storiesOf, forceReRender } from "@storybook/react"
import Select from "./index"
import P from "../P"
import styled from "./styled"

const options = [
  { id: 1, text: "Coconut with milkshake" },
  { id: 2, text: "Fries with cheeseburger" },
  { id: 3, text: "Cheesecake" },
  { id: 4, text: "Cock" }
]
const optionToString = option => option.text
const optionToKey = option => option.id
const placeholder = "Choose what you want"

storiesOf("select", module)
  .add("default", () => {
    let selected = null
    const onSelect = option => {
      selected = option
      console.log(option)
    }
    const props = {
      onSelect,
      options,
      optionToKey,
      optionToString,
      placeholder,
      selected
    }

    return <Select {...props} />
  })
  .add("with default selected item", () => {
    let selected = options[0]
    const onSelect = option => {
      selected = option
    }
    const props = {
      onSelect,
      options,
      optionToKey,
      optionToString,
      placeholder,
      selected
    }
    return <Select {...props} />
  })
