import React, { Component } from "react";

class GameStart extends Component {
  render() {
    return (
      <div className="game--board game--start">
        <div className="game--icon">
          <i className="ttt ttt-x-mark"></i>
          <i className="ttt ttt-circle"></i>
        </div>
        <h3 className="title bold">Choose your play mode</h3>
        <button className="btn btn-blue margin--b-15">with ai</button>
        <button className="btn">with a friend</button>
      </div>
    );
  }
}

export default GameStart;
