import React, { useState, useContext } from 'react';
import Cella from './Cella';
import './tictactoe.css';
import { PunteggioContext } from './PunteggioProvider';
const Griglia = () => {
  const [numCelle, setNumCelle] = useState(Array(9).fill(''));
  const [giocando, setGiocando] = useState(true);
  const [tipoVittoria, setTipoVittoria] = useState('');
  const [celleVincenti, setCelleVincenti] = useState();
  const { punteggio, updatePunteggio } = useContext(PunteggioContext);

  const combinazioniVincenti = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const clickGiocatore = (idx) => {
    if (!giocando) return;
    let copiaCelle = [...numCelle];
    if (copiaCelle[idx] === '') {
      copiaCelle[idx] = 'X';
      setNumCelle(copiaCelle);
      controllaVincita('X', copiaCelle);
      const celleVuote = controllaCelle(copiaCelle);
      console.log(celleVuote);
      if (celleVuote) updatePunteggio(1);
      !celleVuote && inputCPU(copiaCelle);
    }
  };

  const controllaCelle = (celle) => {
    return celle.every((c) => c !== '');
  };

  const inputCPU = (celle) => {
    if (!giocando) return;
    let rndIdx;
    if (!controllaCelle(celle)) {
      rndIdx = Math.floor(Math.random() * 9);
    }

    if (celle[rndIdx] === '') {
      celle[rndIdx] = 'O';
    } else {
      inputCPU(celle);
    }

    if (controllaVincita('O', celle)) setGiocando(false);
    setNumCelle(celle);
  };

  const controllaVincita = (tipo, cella) => {
    for (let i = 0; i < combinazioniVincenti.length; i++) {
      const [a, b, c] = combinazioniVincenti[i];

      if (cella[a] === tipo && cella[b] === tipo && cella[c] === tipo) {
        setGiocando(false);
        setTipoVittoria(tipo);
        setCelleVincenti(combinazioniVincenti[i]);
        switch (tipo) {
          case 'X':
            updatePunteggio(0);
            break;
          case 'O':
            updatePunteggio(2);

            break;
          default:
            break;
        }
        return true;
      }
    }
    return false;
  };

  function resettaBoard() {
    setNumCelle(Array(9).fill(''));
    setGiocando(true);
    setTipoVittoria('');
    setCelleVincenti([]);
  }
  return (
    <div className='container'>
      <div className='contenitore-grid'>
        {numCelle.map((c, i) => (
          <Cella
            key={i}
            value={numCelle[i]}
            idx={i}
            tipoVittoria={tipoVittoria}
            celleVincenti={celleVincenti}
            clickGiocatore={clickGiocatore}
          />
        ))}
      </div>
      <button onClick={resettaBoard}>RESTART</button>
    </div>
  );
};

export default Griglia;
