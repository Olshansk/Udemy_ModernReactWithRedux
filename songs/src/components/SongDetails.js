import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
  const { song } = props;

  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Song Details</h3>
      <p> Song title: {song.title}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
