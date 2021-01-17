import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class GameBoard extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 400 }}
      >
        {(props) => (
          <div style={props} className="game--board game--box">
            <div className="game--score">
              <h4>Player 1</h4>
              <ul className="score">
                <li>0</li>
                <li>0</li>
              </ul>
              <h4>Player 2</h4>
            </div>
            <div className="box-main">
              <div id="box-0" className="box"></div>
              <div id="box-1" className="box"></div>
              <div id="box-2" className="box"></div>
              <div id="box-3" className="box"></div>
              <div id="box-4" className="box"></div>
              <div id="box-5" className="box"></div>
              <div id="box-6" className="box"></div>
              <div id="box-7" className="box"></div>
              <div id="box-8" className="box"></div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default GameBoard;
