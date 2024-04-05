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
      _squares.push(2048);
    }
    return _squares;
  };

  const renderChessboard = (matrixSize) => {
    const _squares = createSquareValue(level);
    let tableHTML = "";

    for (let i = 0; i < matrixSize * matrixSize; i++) {
      // const row = Math.floor(i / matrixSize);
      // const col = i % matrixSize;

      const cellValue = _squares[i] || ""; // Tránh trường hợp mảng không đủ phần tử
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
        <table>
          <tbody dangerouslySetInnerHTML={{ __html: renderChessboard(3) }} />
        </table>
      </section>
    </section>
  );
};

export default Chessboard;
