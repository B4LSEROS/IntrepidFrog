import React from 'react';
import Image from 'next/image';
import section2 from '../css/section2.module.scss';
import css from '../css/main.module.css';
import InfoContainer from './InfoContainer';

export default function Section2 ({content, logoSRC}) {

    return (
        <section className={section2.main}>
            {content !== 'secureTransfers' ?  
                <form className={css.loginContainer}>
            <Image className={css.logo}alt='IntrepidFrog Logo'src={logoSRC}></Image>
            <h1 className={css.title}>Login</h1>
            </form>
            : <InfoContainer lemma={content}/>}
        </section>
    );

}
