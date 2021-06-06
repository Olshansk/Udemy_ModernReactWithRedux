import React from "react";

class ImageList extends React.Component {
  render() {
    const images = this.props.image_data || [];
    const image_elements = images.map((elem) => {
      const { alt_description, id, urls } = elem;
      return (
        <img
          key={id}
          alt={alt_description}
          src={urls.full}
          width="400px"
          height="400px"
        ></img>
      );
    });
    return <div>{image_elements}</div>;
  }
}

export default ImageList;
