import React, {useEffect, useState} from 'react';
import '../../styles.css';

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
            <div class="block-top">
                <div class="limit-wrapper">
                    <div class="block-top-header">
                        <div class="block-top-title">
                            <h1>Contacts</h1>
                        </div>
                    </div>
                    <div class="block-top-body">
                        {footer.map((item, index) => (
                        <div class="block-icons" key={index}>
                            <div class="block-icon-left">
                                <a href="https://www.linkedin.com/in/tom%C3%A1s-mateus-a657992b4/" 
                                    dangerouslySetInnerHTML={{ __html: item.icon }}>
                                </a>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="block-bottom">
                <div class="limit-wrapper">
                    <div class="block-bottom-left">
                        <span><a href="mailto:tomas.g.mateus@gmail.com">tomas.g.mateus@gmail.com</a></span>
                    </div>
                    <div class="block-bottom-right">
                        <span>© {currentYear} | Tomás Mateus</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}