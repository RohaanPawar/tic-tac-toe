import React, { Component } from "react";
import GameStart from "../GameStart/GameStart";
import GameOption from "../GameOption/GameOption";
import GameBoard from "../GameBoard/GameBoard";
import GameBottom from "../GameBottom/GameBottom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: "start",
      gameType: "ai",
    };
  }

  gameStateHandler = (option) => {
    this.setState({
      gameState: option,
    });
  };

  
  render() {
    const appHeight = window.innerHeight;
    return (
      <div className="App">
        <div className="game--container" style={{height: appHeight}}>
          {this.state.gameState === "start" && (
            <GameStart gameStateHandler={this.gameStateHandler} />
          )}
          {this.state.gameState === "option" && (
            <GameOption gameStateHandler={this.gameStateHandler} />
          )}
          {this.state.gameState === "board" && <GameBoard />}
          <GameBottom />
        </div>
      </div>
    );
  }
}

export default App;
