import '../../css/shared/styles.css';
import '../../css/workexperiencepage/workexperiencepage.css';

export default function WorkExperienceItems({ title, subtitle, img, lead }) {
    return (
        <div className="block-body">
            <div className="block-left">
                <div className="block-left-title">
                    <h2>{title}</h2>
                </div>
                <div className="block-left-subtitle">
                    <span>{subtitle}</span>
                </div>
                <div className="block-left-img">
                    <img src={img} alt={title} />
                </div>
            </div>
            <div className="block-right">
                <div className="block-right-lead" dangerouslySetInnerHTML={{ __html: lead }}></div>
            </div>
        </div>
    );
}
