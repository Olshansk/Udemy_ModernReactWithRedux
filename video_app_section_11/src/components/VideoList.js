import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos } = props;
  const videoItems = videos.map((video) => {
    return <VideoItem video={video}></VideoItem>;
  });
  return <div>Something{videoItems}</div>;
};

export default VideoList;
