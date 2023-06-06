import React, { useState } from "react"
import Tile from "./Tile";
import gomku from "../assets/img/gomku.png";

let response = {
    id: "8f697eab-fe00-4536-b4c6-69405ce7384e",
    name: "game_3",
    round: 0,
    player: 0,
    player1: null,
    player2: null,
    board: {
      minInRow: 5,
      cols: 16,
      rows: 16,
      squares: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]        
      ]
    }
  };


export default function Board() {

    const [squares, setSquares] = useState(response.board.squares); 
    const [player, setPlayer] = useState(response.player); 

    const tileClick = (rowIndex, tileIndex) => {
        console.log('im here')
        const newSquares = [...squares];
        newSquares[rowIndex][tileIndex] = 1;
        //newSquares[rowIndex][tileIndex] = newSquares[rowIndex][tileIndex] === 0 ? 1 : 0;
        setSquares(newSquares);
    }; 

   // const updatePlayer = (player) => {
   //     setPlayer(player)
   // }; 
 
   return (
        <div className="board" style={{ backgroundImage: "url(" + gomku + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "contain", }}>
            <div className="container">
                {squares.map((row, rowIndex) => (
                    <div key={rowIndex} style={{display: "flex", justifyContent: "center", alignItems: "center", }} className="row">
                        {row.map((tileValue, tileIndex) => (
                            <Tile key={tileIndex}
                                //bgColor={"rgb(" + Math.floor((rowIndex + 1)/16 * (256) * 0).toFixed(3) + "," + Math.floor((rowIndex + 1)/16 * (256) * 0).toFixed(3) + ',' + Math.floor((rowIndex + 1)/16 * (256) * 0.7).toFixed(3) + ")"}
                                pieceColor={player === 0 ? "#00C6F3" : "#FA70BB"}
                                pieceShadow={player === 0 ? "#075192" : "#ED207F"}
                                tileValue={tileValue}
                                onClick={() => tileClick(rowIndex, tileIndex)} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
};