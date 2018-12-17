import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Careers from "./pages/Careers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { phoneBig } from "./constants/styled-variables";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 16px;

  @media (min-width: ${phoneBig}) {
    padding: 0 5%;
  }
`;

class App extends Component {
  state = {
    name: "",
    lastname: "",
    phone: "",
    comments: ""
  };

  render() {
    return (
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={Careers} />
          <Route path="/main" render={() => <div>Main</div>} />
          <Route path="/offices" component={() => <div>Offices</div>} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
