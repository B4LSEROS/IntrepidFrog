import React, {useEffect, useState, useRef} from 'react';
import InfoContainer from "../components/InfoContainer";
import { Link } from 'react-router-dom';
import Image from 'next/image';
import intrepidFrogLogo from '../public/IntrepidFrog.png';
import gitHubLogo from '../public/github.svg';
import css from '../css/banner.module.css';

export default function Banner ({getContent}) {
    
    return (
        <section className={css.main}>
            <Image alt='IntrepidFrog Logo'src={intrepidFrogLogo} className={css.intrepidFrogLogo} onClick={() => getContent('login')}></Image>

            <div className={css.phrase}>
                <h2 onClick={() => getContent('transactionHistory')}>Transaction History</h2>
                <h2 onClick={() => getContent('userAuthentication')}>User Authentication</h2>
                <h2 onClick={() => getContent('secureTransfers')}>Secure Transfers</h2>
                <h2 onClick={() => getContent('contactUs')}>Contact Us</h2>
            </div>
            
        </section>
    )
}