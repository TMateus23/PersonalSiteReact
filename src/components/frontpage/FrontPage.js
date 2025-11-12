import Slider from './Slider';
import AboutMe from './AboutMe';
import JourneyHome from './JourneyHome';
import '../../css/frontpage/frontpagemedia.css';

export default function FrontPage() {
    return (
        <div>
            <Slider />
            <AboutMe />
            <JourneyHome />
        </div>
    );
}