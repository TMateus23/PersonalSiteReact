import React from 'react';
import '../../css/shared/styles.css';
import '../../css/academicpage/academicpage.css';
import AcademicInternship from './AcademicInternship';
import AcademicJourney from './AcademicJourney';
import ButtonBack from '../shared/ButtonBack';
import '../../css/academicpage/academicpagemedia.css';

export default function Academic() {
    return (
        <div id="content">
            <ButtonBack />
            <AcademicJourney />
            <AcademicInternship />
        </div>
    );
}