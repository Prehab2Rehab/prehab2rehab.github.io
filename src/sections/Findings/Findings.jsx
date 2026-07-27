import React from 'react';
import { useTranslation } from 'react-i18next';
import './Findings.css';
import ReactMarkdown from 'react-markdown';
import Timeline from '../../components/Timeline/Timeline';

const Findings = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="findings" className="wrapper">
            <div className='textBlock'>
                <ReactMarkdown>{t('findings.desc')}</ReactMarkdown>
                <Timeline></Timeline>
            </div>
        </section>
    );
};

export default Findings;