import React, { useState } from 'react';
import Cella from './Cella';
import './tictactoe.css';
const Griglia = () => {
  const [numCelle, setNumCelle] = useState(Array(9).fill(''));
  return (
    <div className='contenitore-grid'>
      {numCelle.map((c, i) => (
        <Cella />
      ))}
    </div>
  );
};

export default Griglia;
