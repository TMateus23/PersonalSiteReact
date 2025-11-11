import React from 'react';
import '../../css/styles.css';
import '../../css/frontpage.css';
import SliderButton from './SliderButton';
import SliderText from './SliderText';

export default function Slider() {
    return (
        <div id="block-slider">
            <div className="block-slider-back" style={{ backgroundImage: 'url(images/tomas1.jpg)' }}>
                <div className="limit-wrapper">
                    <div className="block-slider-body">
                        <SliderText />
                        <SliderButton />
                    </div>
                </div>
            </div>
        </div>
    );
}