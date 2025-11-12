import React, { useEffect, useState } from 'react';
import '../../css/shared/styles.css';
import '../../css/skillspage/skillspage.css';
import '../../css/skillspage/skillspagemedia.css';
import ButtonBack from '../shared/ButtonBack';

export default function Skills() {
    const [skills, setSkills] = useState({
        languages: [],
        Platforms: [],
        Tools: [],
        Frameworks: []
    });

    useEffect(() => {
        fetch('/data/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data.programming_skills));
    }, []);

    const renderSkillItems = (items) => {
        return items.map((skill, index) => (
            <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} title={skill.name} />
            </div>
        ));
    };

    return (
        <div id="content">
            <ButtonBack />
            <div id="block-skills">
                <div className="limit-wrapper">
                    <div className="block-header">
                        <div className="block-header-title">
                            <h1>Programming skills</h1>
                        </div>
                    </div>
                    <div className="block-body">
                        <div className="block-body-title">
                            <h2>Languages</h2>
                        </div>
                        <div className="block-body-imgs">
                            {renderSkillItems(skills.languages)}
                        </div>

                        <div className="block-body-title">
                            <h2>Technologies/Platforms</h2>
                        </div>
                        <div className="block-body-imgs">
                            {renderSkillItems(skills.Platforms)}
                        </div>

                        <div className="block-body-title">
                            <h2>Tools</h2>
                        </div>
                        <div className="block-body-imgs">
                            {renderSkillItems(skills.Tools)}
                        </div>

                        <div className="block-body-title">
                            <h2>Frameworks</h2>
                        </div>
                        <div className="block-body-imgs">
                            {renderSkillItems(skills.Frameworks)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}