import React, {useState, useEffect} from 'react';
import section2 from '../css/section2.module.scss';
import InfoContainer from './InfoContainer';
import LoginContainer from './LoginContainer';

export default function Section2({ content, logoSRC, returnScreen }) {


    const [toLogin, setToLogin] = useState(false);

    function handleExit() {
        if (toLogin === true) {
            setToLogin(false);
            //content = login;
        } else {
            setToLogin(true);
        }
    }

    useEffect(
        () => {
            if (content === 'login') {
                setToLogin(true);
            }
        }, [toLogin]
    )

    return (
        <section className={section2.main}>
            {(content === 'login')? 
                <LoginContainer logo={logoSRC}/>
             : (
                <InfoContainer lemma={content} handleExit={returnScreen} />
            )}
        </section>
    );
}
