import { useEffect, useState } from 'react';
import './App.css';
import Griglia from './components/Griglia';
import Punteggio from './components/Punteggio';
function App() {
  const [punteggio, setPunteggio] = useState([0, 0, 0]);

  const updatePunteggio = (idx) => {
    setPunteggio((punteggioPrecedente) => {
      let nuovoPunteggio = [...punteggioPrecedente];
      if (idx === 0) {
        nuovoPunteggio[0] += 1;
      } else if (idx === 1) {
        nuovoPunteggio[1] += 1;
      } else {
        nuovoPunteggio[2] += 1;
      }
      return nuovoPunteggio;
    });
  };
  useEffect(() => {
    localStorage.setItem('punteggio', JSON.stringify(punteggio));
  }, [punteggio]);
  return (
    <div className='stileBase'>
      <h1>Tic Tac Toe</h1>
      <div className='contenitore-principale'>
        <div>impostazionigr</div>
        <Griglia updatePunteggio={updatePunteggio}></Griglia>
        <Punteggio punteggio={punteggio}></Punteggio>
      </div>
    </div>
  );
}

export default App;
