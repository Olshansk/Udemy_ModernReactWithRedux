import React, { Component } from "react";
import { connect } from "react-redux";

class SongsList extends Component {
  render() {
    console.log(this.props);
    return <div>Songs List</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongsList);
