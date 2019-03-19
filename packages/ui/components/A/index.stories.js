import React from "react"
import { storiesOf } from "@storybook/react"
import { BrowserRouter, Route } from "react-router-dom"
import A from "./index"

storiesOf("link", module)
  .add("default", () => <A>default</A>)
  .add("with google link", () => (
    <A href="https://google.com" target="_blank" rel="norel noopener">
      Open google
    </A>
  ))
  .add("with react-router link", () => (
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <div>
            <p>Home</p>
            <div>
              <A to="/world">Open world</A>
            </div>
          </div>
        )}
      />
      <Route
        path="/world"
        render={() => (
          <div>
            <p>Woah, world!</p>
            <div>
              <A to="/">Close world</A>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  ))
