import React from 'react';
import '../../css/styles.css';
import '../../css/frontpage.css';

export default function JourneyHomeItems({title, icon, xlink }) {
    return (
        <div className="block-timeline">
            <div className="block-timeline-title">
                <h3>{title}</h3>
            </div>
            <div className="block-timeline-icon">
                {icon}
            </div>
            <div className="block-timeline-btn">
                <a href={xlink}>Find out more</a>
            </div>
        </div>
    );
}