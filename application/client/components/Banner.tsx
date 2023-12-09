import React from 'react';
import css from '../css/banner.module.css';

export default function Banner () {
    return (
        <section className={css.main}>
            <h1>Intrepid Frog</h1>

            <div>
                <h2>Transaction History</h2>
                <h2>User Authentication</h2>
                <h2>Secure Transfers</h2>
            </div>
            

        </section>
    )
}