import React from 'react';
import '../../css/styles.css';
import '../../css/academicpage.css';
import AcademicInternship from './AcademicInternship';
import AcademicJourney from './AcademicJourney';
import ButtonBack from '../shared/ButtonBack';

export default function Academic() {
    return (
        <div id="content">
            <ButtonBack />
            <AcademicJourney />
            <AcademicInternship />
        </div>
    );
}