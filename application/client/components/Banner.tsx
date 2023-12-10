import React, {useEffect, useState, useRef} from 'react';
import InfoContainer from "../components/InfoContainer";
import { Link } from 'react-router-dom';
import Image from 'next/image';
import gitHubLogo from '../public/github.svg';
import css from '../css/banner.module.css';

export default function Banner ({getContent}) {

    function handleClick() {
        getContent('title');
    }
    
    return (
        <section className={css.main}>
            <h1 onClick={handleClick}>Intrepid Frog</h1>

            <div className={css.phrase}>
                <h2 onClick={() => getContent('transaction')}>Transaction History</h2>
                <h2 onClick={() => getContent('authentication')}>User Authentication</h2>
                <h2 onClick={() => getContent('Transfers')}>Secure Transfers</h2>
                <h2>Contact Us</h2>
                            <a href='https://github.com/B4LSEROS/IntrepidFrog' target='_blank' rel='noopener noreferrer'className={css.link}>
            <Image alt="GitHub Logo" src={gitHubLogo}
             className={css.github}></Image>
             </a>
            </div>
        </section>
    )
}