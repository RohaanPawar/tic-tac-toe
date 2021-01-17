import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class GameStart extends Component {
  triggerOnClick = () => {
    this.props.gameStateHandler("option");
  };

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 400}}>
        {(props) => (
          <div style={props} className="game--board game--start">
          <div className="game--icon">
            <i className="ttt ttt-x-mark"></i>
            <i className="ttt ttt-circle"></i>
          </div>
          <h3 className="title bold">Choose your play mode</h3>
          <button className="btn btn-blue" onClick={this.triggerOnClick}>
            with ai
          </button>
          <button className="btn" onClick={this.triggerOnClick}>
            with a friend
          </button>
        </div>
        )}
      </Spring>
    );
  }
}

export default GameStart;
