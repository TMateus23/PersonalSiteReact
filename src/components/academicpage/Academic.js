import React from 'react';
import '../../css/styles.css';
import '../../css/academicpage.css';
import AcademicInternship from './AcademicInternship';
import AcademicJourney from './AcademicJourney';

export default function Academic() {
    return (
        <div>
            <AcademicJourney />
            <AcademicInternship />
        </div>
    );
}