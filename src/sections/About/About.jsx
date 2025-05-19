import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './About.css';

const About = () => {

    const { t, i18n } = useTranslation();

    const journeyImage = i18n.language === 'de' ? '/journey-de.svg' : '/journey-en.svg';

    return (
        <section id="about" className="wrapper">
            <div className='textBlock'>
                <h1><span className="prehab">{t('slogan.prehab')}</span><span className="to">{t('slogan.to')}</span><span className="rehab">{t('slogan.rehab')}</span>{t('slogan.tagline')}</h1>
                <h2 className='keywords'>{t('slogan.keywords')}</h2>
                <ReactMarkdown>
                    {t('about')}
                </ReactMarkdown>
            </div>
            <img id="journey" src={journeyImage} alt="Journey graphic" />
            <div className='textBlock caption'>
                <ReactMarkdown>
                    {t('journey')}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default About;