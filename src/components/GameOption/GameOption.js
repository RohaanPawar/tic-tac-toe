import React, { Component } from "react";

class GameOption extends Component {
  render() {
    return (
      <div class="game--board game--option">
        <h3 class="title">Player 1 Pick your side</h3>
        <div class="radio--wrap">
          <label class="custom--radio">
            <input type="radio" name="choice" value="player1" />
            <span class="mark--wrap">
              <i class="ttt ttt-circle"></i>
              <span class="mark"></span>
            </span>
          </label>
          <label class="custom--radio">
            <input type="radio" name="choice" value="player2" />
            <span class="mark--wrap">
              <i class="ttt ttt-x-mark"></i>
              <span class="mark"></span>
            </span>
          </label>
        </div>
        <button class="btn">continue</button>
      </div>
    );
  }
}

export default GameOption;
