import React from 'react';
import '../../css/styles.css';
import '../../css/frontpage.css';
import { Link } from "react-router-dom";


export default function JourneyHomeItems({title, icon, link }) {
    return (
        <div className="block-timeline">
            <div className="block-timeline-title">
                <h3>{title}</h3>
            </div>
            <div className="block-timeline-icon">
                <img className="svg-icon" src={`${process.env.PUBLIC_URL}/${icon}`} alt={title} />
            </div>
            <div className="block-timeline-btn">
                <Link to={link}>Find out more</Link>
            </div>

        </div>
    );
}