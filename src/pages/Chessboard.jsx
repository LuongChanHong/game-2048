import React, { useState } from "react";
import "../css/common.css";
import "../css/color.css";
import "../css/chessboard.css";

const Chessboard = () => {
  const level = 3;

  const renderSquare = () => {
    return <div className="square"></div>;
  };

  const renderChessboard = () => {
    const squares = [];
    for (let i = level; i < level; i++) {}

    return <section className="container"></section>;
  };

  return <section>Chessboard</section>;
};

export default Chessboard;
