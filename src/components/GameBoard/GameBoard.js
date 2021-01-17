import React, { Component } from "react";

class GameBoard extends Component {
  render() {
    return (
      <div class="game--board game--box">
        <div class="game--score">
          <h4>Player 1</h4>
          <ul class="score">
            <li>0</li>
            <li>0</li>
          </ul>
          <h4>Player 2</h4>
        </div>
        <div class="box-main">
          <div id="box_0" class="box">
            <i class="ttt ttt-circle"></i>
          </div>
          <div id="box_1" class="box"></div>
          <div id="box_2" class="box"></div>
          <div id="box_3" class="box">
            <i class="ttt ttt-circle"></i>
          </div>
          <div id="box_4" class="box">
            <i class="ttt ttt-x-mark"></i>
          </div>
          <div id="box_5" class="box">
            <i class="ttt ttt-x-mark"></i>
          </div>
          <div id="box_6" class="box"></div>
          <div id="box_7" class="box"></div>
          <div id="box_8" class="box">
            <i class="ttt ttt-x-mark"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default GameBoard;
