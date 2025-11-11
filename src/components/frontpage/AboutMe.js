import React from 'react';
import '../../css/styles.css';
import '../../css/frontpage.css';
import AboutMeText from './AboutMeText';
import AboutMeImg from './AboutMeImg';

export default function AboutMe() {
    return (
        <div id="block-about-me">
            <div className="limit-wrapper">
                <div className="block-left">
                    <div className="block-header">
                        <div className="block-header-title">
                            <h1>About Me</h1>
                        </div>
                    </div>
                    <AboutMeText />
                </div>
                <div className="block-right">
                    <AboutMeImg />
                </div>
            </div>
        </div>
    );
}