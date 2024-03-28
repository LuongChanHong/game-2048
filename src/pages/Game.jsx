import React, { useState } from "react";
import Chessboard from "./Chessboard";
import "../css/common.css";
import "../css/game.css";

const Game = () => {
  return (
    <section className="appBackground d-flex align-items-center justify-content-center">
      <Chessboard />
    </section>
  );
};

export default Game;
