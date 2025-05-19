import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import './Partner.css';

const Partner = () => {
    const { t } = useTranslation();

    return (
        <section id="partner" className="wrapper">
            <div className="textBlock">
                <ReactMarkdown>{t('partner.desc')}</ReactMarkdown>

                <div className="logo-container">
                    <div className="logo-wrapper">
                        <a href="https://dhp.lbg.ac.at/" target="_blank">
                            <img src="/logos/LBI-DHP.svg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://rehabilitation.lbg.ac.at/" target="_blank">
                            <img src="/logos/LBI_REHA.svg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://ar.lbg.ac.at/" target="_blank">
                            <img src="/logos/LBI-AR.svg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.pmu.ac.at/" target="_blank">
                            <img src="/logos/PMU.svg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.meduniwien.ac.at/" target="_blank">
                            <img src="/logos/med-uni.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.salzburgresearch.at/" target="_blank">
                            <img src="/logos/salzburg-research.jpg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://salk.at/" target="_blank">
                            <img src="/logos/SALK.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.alphaport.at" target="_blank">
                            <img src="/logos/alphaport.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.badvigaun.com/" target="_blank">
                            <img src="/logos/bad-vigaun.jpg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.loidl-consulting.at/" target="_blank">
                            <img src="/logos/loidl.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://redlink.at/" target="_blank">
                            <img src="/logos/redlink.jpg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.motum.at/" target="_blank">
                            <img src="/logos/motum.svg" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://redox-interactive.com/" target="_blank">
                            <img src="/logos/redox.png" />
                        </a>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.stappone.com/" target="_blank">
                            <img src="/logos/stappone.png" />
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Partner;
