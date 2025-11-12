import React from 'react';
import '../../css/shared/styles.css';
import '../../css/academicpage/academicpage.css';

export default function AcademicInternship({ title, subtitle, lead, img }) {
    return (
        <div className="block-stage-lead">
            <div className="block-header">
                <div className="block-header-title">
                    <h2>{title}</h2>
                </div>
                <div className="block-header-subtitle">
                    <span>{subtitle}</span>
                </div>
            </div>
            <div className="block-body">
                <div className="block-left">
                    <div className="block-left-lead" dangerouslySetInnerHTML={{ __html: lead }}></div>
                </div>
                <div className="block-right">
                    <div className="block-right-img">
                        <img src={img} alt={title} />
                    </div>
                </div>
            </div>
        </div>
    );
}