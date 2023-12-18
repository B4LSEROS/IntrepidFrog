import React, { useState, useEffect } from 'react';
import css from '../css/info.module.scss';

export default function InfoContainer({ lemma }) { // Desestructuración de props

  const [currentLemma, setCurrentLemma] = useState('');

  return (
    <div className={css.main}>
      {lemma && 
        <div>
          {lemma} We believe in a user-centric approach for problem solving. ❤️
          <p>Designed utilizing user-first approach</p>
        </div>}
    </div>
  );
}
