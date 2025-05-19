import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './Facts.css';

const About = () => {

    const { t, i18n } = useTranslation();

    return (
        <section id="facts" className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>
                    {t('facts.1')}
                </ReactMarkdown>
                <div className="facts-logo-container">
                    <div className="facts-logo-wrapper">
                        <a href="https://www.ffg.at/" target="_blank">
                            <img src="/logos/FFG.svg" />
                        </a>
                    </div>

                    <div className="facts-logo-wrapper">
                        <a href="https://www.bmwet.gv.at/" target="_blank">
                            <img src="/logos/BMWET.jpg" />
                        </a>
                    </div></div>
                <ReactMarkdown>
                    {t('facts.2')}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default About;