import React from 'react';

function usePunteggio(punteggio, action) {
  switch (action.type) {
    case 'win':
      return punteggio[0]++;
    case 'tie':
      return punteggio[1]++;
    case 'lose':
      return punteggio[2]++;
    default:
      break;
  }
}

export default usePunteggio;
