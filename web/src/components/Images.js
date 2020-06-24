import React, { Component } from "react";

// Ajax function to submit url
import {createImage} from '../ajax.js';

import "./Images.css";
import Popup from "./Popup";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=2",
        "https://picsum.photos/200/300?random=3",
        "https://picsum.photos/200/300?random=4"
      ],
      showModial: false,
      popImageUrl: "",
    };
  }

  imageSubmitter = (e) => {
    e.preventDefault();
    let imageUrlArray = this.state.imageUrlArray;
    imageUrlArray.push(this.state.imageUrl);
    this.setState({
      imageUrlArray: imageUrlArray,
    });

    // Send url to ajax endpoint to store images
    createImage(this.state.imageUrl);
  };

  handleLinkChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.imageUrl);
  };

  handlePopup = (url) => {
    this.setState({
      showModial: !this.state.showModial,
      popImageUrl: url
    });
  };

  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      return (
        <img
          className="singleImage"
          src={url}
          key={index}
          onClick={() => this.handlePopup(url)}
        />
      );
    });

    return (
      <div className="Images">
        <form onSubmit={this.imageSubmitter}>
          <input
            type="text"
            name="imageUrl"
            placeholder="Enter image url"
            onChange={this.handleLinkChange}
          />
          <button type="Submit" className="submitButton">
            Submit Image
          </button>
        </form>
        {images}
        {this.state.showModial ? (
          <Popup
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
          />
        ) : null}
      </div>
    );
  }
}

export default Images;
