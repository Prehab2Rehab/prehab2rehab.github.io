import React from 'react';
import { useTranslation } from 'react-i18next';
import './Team.css';
import deTeam from '/src/locales/de/translation.js'; // Import the German structure

const Team = () => {
    const { t } = useTranslation();
    const team = deTeam.team;

    return (
        <section id="team" className="wrapper">
            <div className="textBlock">
                <h1>{t('team.title', team.title)}</h1>

                <div className="team-container">
                    {Object.entries(team).map(([key, org]) => {
                        if (key === 'title') return null;

                        return (
                            org.people && org.people.map((person, index) => (
                                <div key={`${key}-${index}`} className="team-member">
                                    <div className="photo-wrapper">
                                        <img
                                            src={"team/" + t(`team.${key}.imgkey`) + "/" + person.image}
                                            alt={person.name}
                                            className="team-photo"
                                        />
                                        {person.rights && (
                                            <div className="rights">{person.rights}</div>
                                        )}
                                    </div>
                                    <div className="team-info">
                                        <h3 className="name">{person.name}</h3>
                                        <p className="role">{t(`team.${key}.people.${index}.role`, person.role)}</p>
                                        <p className="org">{t(`team.${key}.name`, org.name)}</p>
                                    </div>
                                </div>
                            ))
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
