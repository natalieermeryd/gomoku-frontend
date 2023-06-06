import Board from "./components/Board";
import "./assets/css/game.css";

function Game() {
  return (
    <div className="game" style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "auto"}}>
      <p className="title">Gomku's Trap
      </p>
      <Board />
    </div>
  );
}

export default Game;