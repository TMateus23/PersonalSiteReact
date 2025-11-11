import React, { useEffect, useState } from 'react';
import JourneyHomeItems from './JourneyHomeItems';
import '../../css/styles.css';
import '../../css/frontpage.css';

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
                        <JourneyHomeItems key={index} title={item.title} icon={item.icon} xlink={item.xlink} />
                    ))}
                </div>
            </div>
        </div>
    );
}