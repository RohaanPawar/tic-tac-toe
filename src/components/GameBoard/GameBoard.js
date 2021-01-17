import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value !== null &&
        (props.value === "X" ? (
          <i className="ttt ttt-x-mark"></i>
        ) : (
          <i className="ttt ttt-circle"></i>
        ))}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      player1Score: 0,
      player2Score: 0
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    if (calculateWinner(squares)) {
      const player = calculateWinner(squares);
      const whichPlayer = (player === 'X') ? 'player1Score' : 'player2Score';
      this.setState({
        [whichPlayer]: this.state[whichPlayer] + 1
      });
      console.log(whichPlayer);
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        turn={this.state.xIsNext}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="game--score">
          <h4>Player 1</h4>
          <ul className="score">
            <li>{this.state.player1Score}</li>
            <li>{this.state.player2Score}</li>
          </ul>
          <h4>Player 2</h4>
        </div>
        <div className="box-main">
          <div id="box-0" className="box">
            {this.renderSquare(0)}
          </div>
          <div id="box-1" className="box">
            {this.renderSquare(1)}
          </div>
          <div id="box-2" className="box">
            {this.renderSquare(2)}
          </div>
          <div id="box-3" className="box">
            {this.renderSquare(3)}
          </div>
          <div id="box-4" className="box">
            {this.renderSquare(4)}
          </div>
          <div id="box-5" className="box">
            {this.renderSquare(5)}
          </div>
          <div id="box-6" className="box">
            {this.renderSquare(6)}
          </div>
          <div id="box-7" className="box">
            {this.renderSquare(7)}
          </div>
          <div id="box-8" className="box">
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

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
            <Board />
          </div>
        )}
      </Spring>
    );
  }
}

export default GameBoard;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
