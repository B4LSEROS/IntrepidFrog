import Head from "next/head";
import Banner from "../components/Banner";
import css from '../css/main.module.css';

export default function Main () {
    return (
        <div className={css.main}>
            <Head>
                <meta lang='es' charSet="unicode"/>
                <meta name="autho" content="Banking application for easy transaction tracking, user management, and secure money transfers." />
                <title>IntrepidFrog</title>
                <link rel='icon' href="/icon-frog.jpg"></link>
            </Head>

            <Banner />
            <section className={css.loginContainer}>

            </section>
        </div>
    )
}