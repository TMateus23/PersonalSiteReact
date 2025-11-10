import React, { useEffect, useState } from 'react';
import '../../styles.css';

export default function JourneyHome() {

    const [journey, setJourney] = useState([]);


    useEffect(() => {
        fetch('data/academic.json')
            .then(res => res.json())
            .then(data => setJourney(data.home_journey));
    }, []);

    return(
        <div id="block-journey">
            <div className="limit-wrapper">
                <div className="block-header">
                    <div className="block-header-title">
                        <h1>Journey</h1>
                    </div>
                </div>
                <div className="block-body">
                    {journey.map((item, index) => (
                        <div className="block-timeline" key={index}>
                            <div className="block-timeline-title">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="block-timeline-icon">
                                {item.icon}
                            </div>
                            <div className="block-timeline-btn">
                                <a href={item.xlink}>Find out more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}