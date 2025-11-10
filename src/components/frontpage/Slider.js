import React from 'react';
import '../../styles.css';

export default function Slider() {
    return (
        <div id="block-slider">
            <div className="block-slider-back" style={{ backgroundImage: 'url(images/tomas1.jpg)' }}>
                <div className="limit-wrapper">
                    <div className="block-slider-body">
                        <div className="block-slider-body-text">
                            <span>
                                Hey, I'm Tomás.<br/>
                                Junior programmer.<br/>
                                Always improving myself!
                            </span>
                        </div>
                        <div className="block-slider-body-button">
                            <a href="#block-about-me">Find out more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}