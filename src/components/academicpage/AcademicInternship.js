import React, { useEffect, useState } from 'react';
import '../../css/shared/styles.css';
import '../../css/academicpage/academicpage.css';
import AcademicInternshipBlockItems from './AcademicInternshipBlockItems';

export default function AcademicInternship() {

    const [academicInternship, setAcademic] = useState([]);
    
    useEffect(() => {
        fetch("data/academic.json")
            .then(response => response.json())
            .then(data => setAcademic(data.internship));
    }, []);

    return (
        <div id="block-stage">
            <div className="limit-wrapper">
                <div className="block-stage-header">
                    <div className="block-header-title">
                        <h1>Internship</h1>
                    </div>
                </div>
                {academicInternship.map((item, index) => (
                    <AcademicInternshipBlockItems key={index} title={item.title} subtitle={item.subtitle} lead={item.lead} img={item.img} />
                ))}
            </div>
        </div>
    );
}