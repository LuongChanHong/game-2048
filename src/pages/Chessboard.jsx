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
      _squares.push(1);
    }
    return _squares;
  };

  const renderSquare = () => {
    return <div className="square"></div>;
  };

  const renderChessboard = () => {
    const _squares = createSquareValue(level);
    let row = <section className="row"></section>;

    console.log(row);

    // for (let i = 0, j = 1; i < _squares.length; i++, j++) {
    //   if (j % level != 0) {
    //     row += `<div className="col">${i}</div>`;
    //   } else {
    //     row += `<div className="col">${i}</div></section><section className="row">`;
    //   }
    // }

    // let row = _squares.map((item, i) => (
    //   <div className="boardSquare">
    //     <div className="boardSquare--content">{i}</div>
    //   </div>
    // ));
    // console.log(row);
    return 0;
  };
  // renderChessboard();

  const displayMatrix = (matrixSize) => {
    const _squares = createSquareValue(level);
    let tableHTML = "";

    for (let i = 0; i < matrixSize * matrixSize; i++) {
      const row = Math.floor(i / matrixSize);
      const col = i % matrixSize;

      // const cellValue = _squares[i] || ""; // Tránh trường hợp mảng không đủ phần tử
      tableHTML += `<td>${_squares[i]}</td>`;

      if ((i + 1) % matrixSize === 0) {
        tableHTML += "</tr>";
        if (i !== matrixSize * matrixSize - 1) {
          tableHTML += "<tr>";
        }
      }
    }

    return tableHTML;
  };

  return (
    <section>
      <section className="container">
        {/* <div className="boardEdge ">{displayMatrix(3)}</div> */}
        <table>
          <tbody dangerouslySetInnerHTML={{ __html: displayMatrix(3) }} />
        </table>
      </section>
    </section>
  );
};

export default Chessboard;
