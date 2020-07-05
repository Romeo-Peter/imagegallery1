import React, { Component } from "react";

// Ajax function to submit url
import { createImage, listImages, deleteImage } from "../ajax.js";

import "./Images.css";
import Popup from "./Popup";

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlArray: [],
      showModial: false,
      popImageUrl: "",
      popImageId: "",
    };
  }

  imageSubmitter = (e) => {
    e.preventDefault();
    let imageUrlArray = this.state.imageUrlArray;
    imageUrlArray.push(this.state.imageUrl);
    this.setState({
      imageUrlArray: imageUrlArray,
    });

    // store images data
    createImage(this.state.imageUrl);

    // Update Gallery
    this.handleOnload();
  };

  handleLinkChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePopup = (url, id) => {
    this.setState({
      showModial: !this.state.showModial,
      popImageUrl: url,
      popImageId: id,
    });
  };

  // Life cycle
  componentDidMount() {
    this.handleOnload();
  }

  componentWillUnmount() {
    this.handleOnload();
  }

  // Request image data
  async handleOnload() {
    const data = await listImages();

    this.setState({
      imageUrlArray: data,
    });
  }

  // Delete image data
  handleDeleteOnPopup = () => {
    const imageId = this.state.popImageId;

    // Close Popup and delete image
    this.handlePopup();
    deleteImage(imageId);

    // Update state
    this.setState(
      (state) => {
        return {
          imageUrlArray: [
            state.imageUrlArray.filter((data) => data.id !== imageId),
          ],
        };
      },
      () => this.handleOnload()
    );

    console.log(`${this.state.imageUrlArray.length} images left in gallery`);
  };

  render() {
    const imageUrlArray = this.state.imageUrlArray;
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
        {imageUrlArray.length > 1
          ? imageUrlArray.map((data, index) => (
              <img
                className="singleImage"
                id={data.id}
                src={data.imageurl}
                key={index}
                onClick={() => this.handlePopup(data.imageurl, data.id)}
                alt=""
              />
            ))
          : console.log("Loading...")}
        {this.state.showModial ? (
          <Popup
            popImageUrl={this.state.popImageUrl}
            handleClick={this.handleDeleteOnPopup}
          />
        ) : null}
      </div>
    );
  }
}

export default Images;
