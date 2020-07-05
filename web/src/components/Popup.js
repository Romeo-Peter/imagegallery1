import React, { Component } from "react";

import "./Images.css";

class App extends Component {
  handleclick = () => {
    this.props.handleClick();
  };

  render() {
    return (
      <div className="popupParent">
        <div className="popupImage">
          <button className="imageClosingButton" onClick={this.handleclick}>
            X
          </button>
          <img src={this.props.popImageUrl} id={this.props.popImageId} alt="" />
        </div>
      </div>
    );
  }
}

export default App;
