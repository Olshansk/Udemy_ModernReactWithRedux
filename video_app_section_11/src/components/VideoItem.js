import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  const { video } = props;
  console.log(video);
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url}></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
