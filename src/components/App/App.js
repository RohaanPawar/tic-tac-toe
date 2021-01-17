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
      gameState: "board",
      gameType: "ai",
    };
  }

  gameStateHandler = (option) => {
    this.setState({
      gameState: option,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="game--container">
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
