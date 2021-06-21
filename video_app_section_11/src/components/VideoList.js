import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  const videoItems = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video}></VideoItem>;
  });
  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
