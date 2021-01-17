import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class GameOption extends Component {
  triggerOnClick = () => {
    this.props.gameStateHandler("board");
  };

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 400}}>
        {(props) => (
          <div style={props} className="game--board game--option">
            <h3 className="title">Player 1 Pick your side</h3>
            <div className="radio--wrap">
              <label className="custom--radio">
                <input type="radio" name="choice" value="player1" />
                <span className="mark--wrap">
                  <i className="ttt ttt-circle"></i>
                  <span className="mark"></span>
                </span>
              </label>
              <label className="custom--radio">
                <input type="radio" name="choice" value="player2" />
                <span className="mark--wrap">
                  <i className="ttt ttt-x-mark"></i>
                  <span className="mark"></span>
                </span>
              </label>
            </div>
            <button className="btn" onClick={this.triggerOnClick}>
              continue
            </button>
          </div>
        )}
      </Spring>
    );
  }
}

export default GameOption;
