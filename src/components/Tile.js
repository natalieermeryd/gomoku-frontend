import React from "react";


function Tile({ tileValue, bgColor, pieceColor, pieceShadow, onClick }) {
  return (
    <>
    <div className="tile" style={{background: bgColor, display: "flex", alignItems: "center", justifyContent: "center", width: "min(3vh, 3vw)", height: "min(3vh, 3vw)", color: "white",}}
 onClick={onClick}>
         <div className="bar horizontal"></div>
         <div className="bar vertical"></div>
        {tileValue === 1 && <div className="piece" style={{zIndex: "10", borderRadius: "50%", borderStyle: "none", width: "min(2.6vh, 2.6vw)", height: "min(2.6vh, 2.6vw)", margin: "auto", backgroundColor: pieceColor, boxShadow: "0 0 min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) " + pieceShadow,}}></div> }
    </div>
    </>
  )
}

export default Tile;