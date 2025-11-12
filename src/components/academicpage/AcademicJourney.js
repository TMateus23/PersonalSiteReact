import React, { useEffect, useState } from 'react';
import '../../css/shared/styles.css';
import '../../css/academicpage/academicpage.css';
import AcademicBlockItems from './AcademicJourneyBlockItems';

export default function Academic() {
    const [academic, setAcademic] = useState([]);

    useEffect(() => {
        fetch("data/academic.json")
        .then(response => response.json())
        .then(data => setAcademic(data.academic_journey));
    }, []);

    return (
        <div id="block-academic">
            <div className="limit-wrapper">
                <div className="block-academic-top">
                    <div className="block-top-lead">
                        <h1>Academic Journey</h1>
                    </div>
                </div>

                {academic.map((item, index) => (
                    <AcademicBlockItems key={index} title={item.title} subtitle={item.subtitle} lead={item.lead} img={item.img} />
                ))}
            </div>
        </div>
    );
}
