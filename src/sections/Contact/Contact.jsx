import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='textBlock'>
            <h1>{t('contact.heading')}</h1>
            <p>{t('contact.description')}</p>
            <h3>{t('contact.subheading')}</h3>
            <p>
                {t('contact.address')}
                <br />
                {t('contact.phone')}: <a href="tel:+435725582701">+43 (0) 5 7255 82701</a>
                <br />
                {t('contact.email')}: <a href="mailto:office.dhp@lbg.ac.at">office.dhp@lbg.ac.at</a>
                <p className='LinkedIn'>
                    <a href="https://www.linkedin.com/company/prehab2rehab?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 510 510">
                            <path fill="white" d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9 S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204 V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z"/></svg>
                        {t('contact.linkedIn')}
                    </a></p>
            </p>
        </div>
    );
};

export default Contact;
