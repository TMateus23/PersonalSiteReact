import React from 'react';
import '../../css/styles.css';
import { Link } from "react-router-dom";
export default function ButtonBack() {
    return (
        <div className="block-btn">
            <div className="block-button">
                <div className="block-btn-arrow">
                    <Link to="/#block-journey">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24.2px"
                            height="9.7px" viewBox="0 0 24.2 9.7" xmlSpace="preserve">
                            <polygon
                                points="0,4.9 4.9,0 5.6,0.7 1.9,4.4 24.2,4.4 24.2,5.4 1.9,5.4 5.6,9 4.9,9.7"
                                fill="#4D7493"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="block-btn-lead">
                    <Link to="/"><span>Voltar atrás</span></Link>
                </div>
            </div>
        </div>
    );
}