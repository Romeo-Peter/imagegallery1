import React, { Component } from 'react';

class Storage extends Component {
  render() {
    return (
      <form action="/api/images" method="post" encType="multipart/form-data">
        <input type="file" name="image" />
      </form>
    );
  }
}

export default Storage;
