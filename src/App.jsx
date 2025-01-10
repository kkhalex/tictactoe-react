import { useContext, useEffect, useState } from 'react';
import './App.css';
import Griglia from './components/Griglia';
import Punteggio from './components/Punteggio';
import { PunteggioProvider } from './components/PunteggioProvider';

function App() {
  return (
    <div className='stileBase'>
      <h1>Tic Tac Toe</h1>
      <PunteggioProvider>
        <div className='contenitore-principale'>
          <div>impostazionigr</div>
          <Griglia></Griglia>
          <Punteggio></Punteggio>
        </div>
      </PunteggioProvider>
    </div>
  );
}

export default App;
