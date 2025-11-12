import React, { useEffect, useState } from 'react';
import '../../css/shared/styles.css';
import '../../css/shared/footer.css';
import '../../css/shared/footermedia.css';

export default function Footer() {

    //Variable that will return updated current year
    const currentYear = new Date().getFullYear();

    const [footer, setFooter] = useState([]);

    useEffect (() => {
        fetch('data/footer.json')
            .then(res => res.json())
            .then(data => setFooter(data.footer));
    }, []);

    return (
        <footer>
        <div id="block-footer">
            <div className="block-top">
                <div className="limit-wrapper">
                    <div className="block-top-header">
                        <div className="block-top-title">
                            <h1>Contacts</h1>
                        </div>
                    </div>
                    <div className="block-top-body">
                        {footer.map((item, index) => (
                        <div className="block-icons" key={index}>
                            <div className="block-icon-left">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" 
                                    dangerouslySetInnerHTML={{ __html: item.icon }}>
                                </a>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="block-bottom">
                <div className="limit-wrapper">
                    <div className="block-bottom-left">
                        <span><a href="mailto:tomas.g.mateus@gmail.com">tomas.g.mateus@gmail.com</a></span>
                    </div>
                    <div className="block-bottom-right">
                        <span>© {currentYear} | Tomás Mateus</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}