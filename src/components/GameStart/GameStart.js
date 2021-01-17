import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class GameStart extends Component {
  triggerOnClick = () => {
    this.props.gameStateHandler("option");
  };

  render() {
    return (
      <div className="game--board game--start">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 400 }}
        >
          {(props) => (
            <div style={props} className="game--icon">
              <i className="ttt ttt-x-mark"></i>
              <i className="ttt ttt-circle"></i>
            </div>
          )}
        </Spring>

        <Spring from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000, duration: 400 }}>
          {(props) => (
            <div style={props} className="centred">
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
      </div>
    );
  }
}

export default GameStart;
