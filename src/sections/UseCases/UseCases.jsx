import React from 'react';
import { useTranslation } from 'react-i18next';
import './UseCases.css';

const UseCases = () => {
  const { t } = useTranslation();

  return (
    <section id="usecases" className="wrapper">
      <div className='textBlock'>
        <h1>{t('usecases.heading')}</h1>
        <p>{t('usecases.desc')}</p>
        <div className="use-cases-container">
          <div className="use-case">
            <div className="use-case-image-wrapper">
              <img src="/abdominal.svg" alt="Viszeralchirurgie" className="use-case-image" />
            </div>
            <h3 className="use-case-title">{t('usecases.abdominal.title')}</h3>
            <p className="use-case-desc">{t('usecases.abdominal.desc')}</p>
          </div>

          <div className="use-case">
            <div className="use-case-image-wrapper">
              <img src="/knee.svg" alt="Kniegelenksersatz" className="use-case-image" />
            </div>
            <h3 className="use-case-title">{t('usecases.knee.title')}</h3>
            <p className="use-case-desc">{t('usecases.knee.desc')}</p>
          </div>

          <div className="use-case">
            <div className="use-case-image-wrapper">
              <img src="/cardiac.svg" alt="Herzchirurgie" className="use-case-image" />
            </div>
            <h3 className="use-case-title">{t('usecases.cardiac.title')}</h3>
            <p className="use-case-desc">{t('usecases.cardiac.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
