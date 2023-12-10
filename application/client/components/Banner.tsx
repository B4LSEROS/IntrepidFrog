import React, {useEffect, useState, useRef} from 'react';
import css from '../css/banner.module.css';

export default function Banner () {

    const lemmaRef = useRef(null);

    useEffect(() => {
        if (lemmaRef.current) {
            const element = lemmaRef.current;
            const handler = () => {
                element.classList.add('Fade1');

            };
  
            element.addEventListener('animationend', handler);

            return () => {
                element.removeEventListener('animationend', handler);
            };
        }
    }, []);
    
    return (
        <section className={css.main}>
            <h1>Intrepid Frog</h1>

            <div className={css.phrase}>
                <h2 >Transaction History</h2>
                <h2 ref={lemmaRef}>User Authentication</h2>
                <h2>Secure Transfers</h2>
            </div>
            

        </section>
    )
}