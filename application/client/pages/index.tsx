import React, {useState, useEffect} from 'react';
import Head from "next/head";
import Image from 'next/image';
import Banner from "../components/Banner";
import logo from '../public/logo.png';
import css from '../css/main.module.css';
import InfoContainer from "../components/InfoContainer";

export default function Main () {

    const [content, setContent] = useState('');

    return (
        <div className={css.main}>
            <Head>
                <meta lang='es' charSet="unicode"/>
                <meta name="description" content="Banking application for easy transaction tracking, user management, and secure money transfers." />
                <title>IntrepidFrog</title>
                <link rel='icon' href="/icon-frog.jpg"></link>
            </Head>

            <Banner getContent={setContent}/>


            <section className={css.section2}>

           {content !== 'title' ?  
                <form className={css.loginContainer}>
                        <Image className={css.logo}alt='IntrepidFrog Logo'src={logo}></Image>
                        <h1 className={css.title}>Login</h1>
                </form>
             : <InfoContainer />}

            </section>

        </div>
    )
}