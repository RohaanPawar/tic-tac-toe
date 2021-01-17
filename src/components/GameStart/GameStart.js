import React, { Component } from "react";

class GameStart extends Component {
  triggerOnClick = () => {
    this.props.gameStateHandler('option');
  };
  render() {
    return (
      <div className="game--board game--start">
        <div className="game--icon">
          <i className="ttt ttt-x-mark"></i>
          <i className="ttt ttt-circle"></i>
        </div>
        <h3 className="title bold">Choose your play mode</h3>
        <button className="btn btn-blue" onClick={this.triggerOnClick}>
          with ai
        </button>
        <button className="btn" onClick={this.triggerOnClick}>with a friend</button>
      </div>
    );
  }
}

export default GameStart;
