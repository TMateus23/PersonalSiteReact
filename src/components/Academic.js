import React, { useEffect, useState } from 'react';
import '../styles.css';

export default function Academic() {
    const [academic, setAcademic] = useState([]);

    useEffect(() => {
        fetch("data/academic.json")
        .then(response => response.json())
        .then(data => setAcademic(data.academic_journey));
    }, []);

    return (
        <div id="content">
            <div id="block-academic">
                <div className="limit-wrapper">
                    <div className="block-academic-top">
                        <div className="block-top-lead">
                            <h1>Academic Journey</h1>
                        </div>
                    </div>

                    {academic.map((item, index) => (
                        <div className="block-academic-lead" key={index}>
                            <div className="block-header">
                                <div className="block-header-title">
                                    <h2>{item.title}</h2>
                                </div>
                            <div className="block-header-subtitle">
                                <span>{item.subtitle}</span>
                            </div>
                        </div>

                        <div className="block-body">
                            <div className="block-left">
                                <div className="block-left-lead">
                                    {/*Used when we use JSON and want to convert the text to be interpreted as an HTML element.*/}
                                    <span SetInnerHTML={{ __html: item.lead }}></span>
                                </div>
                            </div>

                            <div className="block-right">
                                <div className="block-right-img">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
