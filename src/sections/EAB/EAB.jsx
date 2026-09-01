import React from 'react';
import { useTranslation } from 'react-i18next';
import './EAB.css';
import deEAB from '/src/locales/de/translation.js';

const EAB = () => {
    const { t } = useTranslation();
    const eab = deEAB.eab;

    return (
        <section id="eab" className="wrapper">
            <div className="textBlock">
                <h1>{t('eab.title')}</h1>

                <div className="eab-container">
                    {eab.people.map((person, index) => (
                        <div
                            key={`${person.name}-${index}`}
                            className="eab-member"
                        >

                            <div className="eab-icon-wrapper">
                                <svg
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="blueGreenGradient"
                                            x1="0"
                                            y1="0"
                                            x2="64"
                                            y2="64"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0%" stopColor="#2563EB" />
                                            <stop offset="100%" stopColor="#10B981" />
                                        </linearGradient>
                                    </defs>

                                    {/* Gradient circle — everything outside it is transparent */}
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r="32"
                                        fill="url(#blueGreenGradient)"
                                    />

                                    {/* Person */}
                                    <circle
                                        cx="32"
                                        cy="23"
                                        r="8"
                                        fill="#FFFFFF"
                                    />

                                    <path
                                        d="M16 48C16 39.16 23.16 32 32 32C40.84 32 48 39.16 48 48Z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                            </div>

                            <div className="eab-info">
                                <h3 className="name">{person.name}</h3>
                                <p className="org">{t(`eab.people.${index}.org`)}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EAB;