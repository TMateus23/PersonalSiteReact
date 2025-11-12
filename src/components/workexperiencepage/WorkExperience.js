import React, { useEffect, useState } from 'react';
import '../../css/shared/styles.css';
import '../../css/workexperiencepage/workexperiencepage.css';
import '../../css/workexperiencepage/workexperiencepagemedia.css';
import WorkExperienceItems from './WorkExperienceItems';
import ButtonBack from '../shared/ButtonBack';

export default function WorkExperience() {

    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        fetch('/data/workexperience.json')
            .then(res => res.json())
            .then(data => setWorkExperience(data.work_experience));
    }, []);

    return (
        <div id="content">
            <ButtonBack />
            <div id="block-works">
                <div className="limit-wrapper">
                    <div className="block-header">
                        <div className="block-header-title">
                            <h1>Work Experience</h1>
                        </div>
                    </div>

                    {workExperience.map((item, index) => (
                        <WorkExperienceItems key={index} title={item.title} subtitle={item.subtitle} img={item.img} lead={item.lead} /> 
                    ))}
                </div>
            </div>
        </div>
    )
}