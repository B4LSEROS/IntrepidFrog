import React, {useState} from 'react';
import Head from "next/head";
import Banner from "../components/Banner";
import logo from '../public/logo-white.jpg';
import css from '../css/main.module.css';
import Section2 from '../components/Section2';

export default function Main () {

    const [content, setContent] = useState<string>('login');

    function getOption (text: string) {
        setContent(text);
    }

    return (
        <div className={css.main}>
            <Head>
                <meta lang='es' charSet="unicode"/>
                <meta name="description" content="Banking application for easy transaction tracking, user management, and secure money transfers." />
                <title>IntrepidFrog</title>
                <link rel='icon' href="/logo-white.jpg"></link>
            </Head>

            <Banner getContent={getOption}/>
            <Section2 content={content} logoSRC={logo} returnScreen={getOption}/>
        </div>
    )
}