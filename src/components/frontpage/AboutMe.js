import React from 'react';
import '../../styles.css';

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
                    <div className="block-body">
                        <div className="block-header-body">
                            <p>
                                Hey! I'm Tomás Mateus, a graduate in Computer Engineering Bachelor's degree from the University of Évora, currently living in Santarém, Portugal. <br />
                                I'm passionate about web development and aim to become a full-stack developer, with a strong focus on front-end design and user experience. <br />
                                I'm naturally curious and always looking for new things to learn, whether it's the latest tech trends or solving problems in creative ways. <br />
                                I am currently in the first year of my Master's degree in Informatics and Management at ISCTE - University Institute of Lisbon, studying in a part-time, post-work program. <br />
                                Outside of code, I'm a big fan of football, love to travel, and enjoy spending time gaming. <br />
                                This site is a glimpse into what I do, what I'm learning, and where I'm heading. Feel free to look around!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block-right">
                    <div className="block-body">
                        <div className="block-body-img">
                            <img src="images/me.jpg" alt="Tomás Mateus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
