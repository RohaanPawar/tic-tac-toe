import GameStart from '../GameStart/GameStart';
import GameOption from '../GameOption/GameOption';
import GameBoard from '../GameBoard/GameBoard';
import GameBottom from '../GameBottom/GameBottom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="game--container">
        <GameStart />
        <GameOption />
        <GameBoard />
        <GameBottom />
      </div>
    </div>
  );
}

export default App;
