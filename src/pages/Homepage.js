import React, { Component } from "react";
import Header from "../components/header";
import HeaderDuplicate from "../components/headerDup";
import Body from "../components/body";

class HomePage extends Component {
  state = {
    activeView: "default",
  };

  handleLogin = () => {
    this.setState({ activeView: "loginButtonClicked" });
    console.log(this.state.activeView);
  };

  render() {
    return (
      <div>
        {this.state.activeView === "default" && (
          <div>
            <Header onLoginClick={this.handleLogin} />
            <Body />
          </div>
        )}
        {this.state.activeView === "loginButtonClicked" && (
          <div>
            <HeaderDuplicate />
            <Body />
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
