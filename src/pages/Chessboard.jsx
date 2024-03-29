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
    // let row = `<section className="row">`;
    // for (let i = 0, j = 1; i < _squares.length; i++, j++) {
    //   if (j % level != 0) {
    //     row += `<div className="col">${i}</div>`;
    //   } else {
    //     row += `<div className="col">${i}</div></section><section className="row">`;
    //   }
    // }
    let row = _squares.map((item, i) => <div className="col-4">{i}</div>);
    console.log(row);
    return row;
  };

  return (
    <section>
      <section className="container">
        <div className="row">{renderChessboard()}</div>
      </section>
    </section>
  );
};

export default Chessboard;
