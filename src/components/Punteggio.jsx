import React from 'react';

const Punteggio = ({ punteggio }) => {
  return (
    <div className='box-punteggio'>
      <div className='container-score'>
        <h2>Player 1 score:</h2>
        <div>
          <p>
            win: <span>{punteggio[0]}</span>
          </p>
          <p>
            tie: <span>{punteggio[1]}</span>
          </p>
          <p>
            lose: <span>{punteggio[2]}</span>
          </p>
        </div>
      </div>
      <div className='container-score'>
        <h2>Player 2 score CPU:</h2>
        <div>
          <p>
            win: <span>{punteggio[2]}</span>
          </p>
          <p>
            tie: <span>{punteggio[1]}</span>
          </p>
          <p>
            lose: <span>{punteggio[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Punteggio;
