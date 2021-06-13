import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard.js";

class ImageList extends React.Component {
  render() {
    const images = this.props.image_data || [];
    const image_elements = images.map((image) => {
      return <ImageCard key={image.id} image={image}></ImageCard>;
    });
    return <div className="image-list">{image_elements}</div>;
  }
}

export default ImageList;
