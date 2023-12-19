import React from 'react';
import section2 from '../css/section2.module.scss';
import InfoContainer from './InfoContainer';
import LoginContainer from './LoginContainer';

export default function Section2({ content, logoSRC }) {
    return (
        <section className={section2.main}>
            {content === 'title' ? 
                <LoginContainer logo={logoSRC}/>
             : (
                <InfoContainer lemma={content} />
            )}
        </section>
    );
}
