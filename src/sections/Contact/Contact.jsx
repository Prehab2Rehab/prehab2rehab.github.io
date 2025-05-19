import React from 'react';
import { useTranslation } from 'react-i18next';

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
            </p>
        </div>
    );
};

export default Contact;
