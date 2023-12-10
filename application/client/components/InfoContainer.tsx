import React, {useState, useEffect} from 'react';
import css from '../css/info.module.scss';

export default function InfoContainer(lemma) {

    function renderContent() {
        if (lemma === 'transaction') {
            return (
                <p>
                    Design with a user-centric approach to problem solving
                </p>
            )
        }

    }

    return (
        <div className={css.main}>
            We believe in a user-centric approach for problem solving. ❤️
        </div>
    )
}