import React from 'react';
import '../../css/styles.css';
import '../../css/header.css';

export default function Header() {
    return (
        <header className="default-page">
            <div id="block-header">
                <div className="block-header-left">
                    <div className="block-header-left-text">
                        <a href="index.html">TM</a>
                    </div>
                </div>

                <div className="block-header-middle">
                    <div className="main-menu">
                        <div className="button-close-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25">
                                <g fill="#000000" fillRule="evenodd">
                                    <path d="M6.161.126l21.213 21.213-3.535 3.535L2.626 3.661z"></path>
                                    <path d="M2.626 21.339L23.839.126l3.535 3.535L6.161 24.874z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="index.html#block-about-me">About Me</a></li>
                                <li><a href="index.html#block-journey">Journey</a></li>
                                <li><a href="index.html#block-footer">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="block-header-right">
                    <div className="block-burguer-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25">
                            <g fill="#ffffff" fillRule="evenodd">
                                <path d="M0 0h30v5H0zM0 10h30v5H0zM0 20h30v5H0z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}