import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './Goals.css';

const Goals = () => {

    const { t, i18n } = useTranslation();

    return (
        <section id="goals"className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>
                    {t('goals')}
                </ReactMarkdown>
            </div>
        </section>
    );
};

export default Goals;