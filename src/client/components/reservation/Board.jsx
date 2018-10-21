import React from 'react';
import BoardSvg from './write-board.svg';

const Board = () => (
  <div className="d-flex justify-content-center align-content-center">
    <img src={BoardSvg} alt="board" style={{ width: '30vh', opacity: '0.80' }} />
  </div>
);

export default Board;
