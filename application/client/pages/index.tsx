import Head from "next/head";
import Image from 'next/image';
import Banner from "../components/Banner";
import logo from '../public/logo.png';
import css from '../css/main.module.css';

export default function Main () {
    return (
        <div className={css.main}>
            <Head>
                <meta lang='es' charSet="unicode"/>
                <meta name="description" content="Banking application for easy transaction tracking, user management, and secure money transfers." />
                <title>IntrepidFrog</title>
                <link rel='icon' href="/icon-frog.jpg"></link>
            </Head>

            <Banner />
            <section className={css.section2}>
                <form className={css.loginContainer}>
                    
                        <Image className={css.logo}alt='IntrepidFrog Logo'src={logo}></Image>
                        <h1 className={css.title}>Login</h1>

                </form>
            </section>
        </div>
    )
}