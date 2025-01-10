import React from 'react';
import './tictactoe.css';
const Cella = ({ idx, clickGiocatore, value, tipoVittoria, celleVincenti }) => {
  const handleUserClick = () => {
    clickGiocatore(idx);
  };
  return (
    <div
      className={`cella-gioco ${
        tipoVittoria === 'X' && celleVincenti.includes(idx) && 'player1'
      } ${tipoVittoria === 'O' && celleVincenti.includes(idx) && 'player2'}`}
      onClick={() => handleUserClick()}
    >
      {value}
    </div>
  );
};

export default Cella;
