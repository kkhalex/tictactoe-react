import React, { createContext, useState } from 'react';

export const PunteggioContext = createContext();

export const PunteggioProvider = ({ children }) => {
  const [punteggio, setPunteggio] = useState([0, 0, 0]);

  const updatePunteggio = (idx) => {
    let nuovoPunteggio = [...punteggio];
    nuovoPunteggio[idx] += 1;
    setPunteggio(nuovoPunteggio);
  };

  return (
    <PunteggioContext.Provider value={{ punteggio, updatePunteggio }}>
      {children}
    </PunteggioContext.Provider>
  );
};
