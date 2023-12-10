import React, {useEffect, useState, useRef} from 'react';
import InfoContainer from "../components/InfoContainer";
import { Link } from 'react-router-dom';
import Image from 'next/image';
import intrepidFrogLogo from '../public/IntrepidFrog.png';
import gitHubLogo from '../public/github.svg';
import css from '../css/banner.module.css';

export default function Banner ({getContent}) {

    function handleClick() {
        getContent('title');
    }
    
    return (
        <section className={css.main}>
            <Image alt='IntrepidFrog Logo'src={intrepidFrogLogo} className={css.intrepidFrogLogo}onClick={handleClick}></Image>

            <div className={css.phrase}>
                <h2 onClick={() => getContent('transaction')}>Transaction History</h2>
                <h2 onClick={() => getContent('authentication')}>User Authentication</h2>
                <h2 onClick={() => getContent('Transfers')}>Secure Transfers</h2>
                <h2>Contact Us</h2>
            </div>
            
        </section>
    )
}