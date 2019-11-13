import React, { Component } from "react";
import "./App.css";
import "tabler-react/dist/Tabler.css";
import "./Custom.css"
import AddText from "./containers/AddText"
import TextList from "./containers/TextList"
import { connect } from "react-redux";
import { addText } from "./actions"

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

class App extends Component {


  // componentDidMount() {
  //   const data = "this is some data"
  //   ipfs.add(data, (error, result) => {
  //     if(error) {
  //       console.error(error)
  //       return
  //     }
  //     console.log(result)
  //     console.log("https://ipfs.infura.io/ipfs/"+result)
  //     console.log(result)

  //   })
  // }

  render() {
    return (
      <div class="container">
          <AddText/>
          <TextList/>
        </div>
    );
  }
}
export default connect()(App);
