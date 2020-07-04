import React, { Component } from "react";

import "./Images.css";

class App extends Component {
  // Close popup and delete image data
  handleOnclick = () => {
    this.props.closePopup();
    const imageId = this.props.popImageId;
    this.props.deleteImage(imageId);
  };

  render() {
    return (
      <div className="popupParent">
        <div className="popupImage">
          <button className="imageClosingButton" onClick={this.handleOnclick}>
            X
          </button>
          <img src={this.props.popImageUrl} id={this.props.popImageId} alt="" />
        </div>
      </div>
    );
  }
}

export default App;
