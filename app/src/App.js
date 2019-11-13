import React, { Component } from "react";
import "./App.css";
import "tabler-react/dist/Tabler.css";
import "./Custom.css"
import AddText from "./containers/AddText"
import TextList from "./containers/TextList"
import { connect } from "react-redux";

class App extends Component {

  render() {
    return (
      <div class="container">
        <AddText />
        <TextList />
      </div>
    );
  }
}
export default connect()(App);
