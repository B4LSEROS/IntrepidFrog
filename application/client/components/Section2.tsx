import React, {useState} from 'react';
import section2 from '../css/section2.module.scss';
import InfoContainer from './InfoContainer';
import LoginContainer from './LoginContainer';

export default function Section2({ content, logoSRC }) {


    const [isExit, setIsExit] = useState(false);

    function handleExit() {
        setIsExit(!isExit);
    }

    return (
        <section className={section2.main}>
            {(content === 'login' || isExit)? 
                <LoginContainer logo={logoSRC}/>
             : (
                <InfoContainer lemma={content} handleExit={handleExit} />
            )}
        </section>
    );
}
