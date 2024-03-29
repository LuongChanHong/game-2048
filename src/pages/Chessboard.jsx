import React, { useState } from "react";
import "../css/common.css";
import "../css/color.css";
import "../css/chessboard.css";

const Chessboard = () => {
  const [square, setSquare] = useState([]);
  const level = 3;

  const createSquareValue = (level) => {
    let _squares = [];
    for (let i = 0; i < level * level; i++) {
      _squares.push(0);
    }
    return _squares;
  };

  const renderSquare = () => {
    return <div className="square"></div>;
  };

  const renderChessboard = () => {
    const _squares = createSquareValue(level);

    for (let i = 0; i < _squares.length; i++) {}
    return 0;
  };
  renderChessboard();

  return (
    <section>
      <section className="container">Chessboard</section>
    </section>
  );
};

export default Chessboard;
