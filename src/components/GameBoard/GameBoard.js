import React, { Component } from "react";

class GameBoard extends Component {
  render() {
    return (
      <div className="game--board game--box">
        <div className="game--score">
          <h4>Player 1</h4>
          <ul className="score">
            <li>0</li>
            <li>0</li>
          </ul>
          <h4>Player 2</h4>
        </div>
        <div className="box-main">
          <div id="box-0" className="box">
            <i className="ttt ttt-circle"></i>
          </div>
          <div id="box-1" className="box"></div>
          <div id="box-2" className="box"></div>
          <div id="box-3" className="box">
            <i className="ttt ttt-circle"></i>
          </div>
          <div id="box-4" className="box">
            <i className="ttt ttt-x-mark"></i>
          </div>
          <div id="box-5" className="box">
            <i className="ttt ttt-x-mark"></i>
          </div>
          <div id="box-6" className="box"></div>
          <div id="box-7" className="box"></div>
          <div id="box-8" className="box">
            <i className="ttt ttt-x-mark"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default GameBoard;
