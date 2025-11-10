import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Slider from './components/frontpage/Slider';
import Academic from './components/Academic';
import AboutMe from './components/frontpage/AboutMe';
import JourneyHome from './components/frontpage/JourneyHome';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Slider></Slider>
        <AboutMe></AboutMe>
        <JourneyHome></JourneyHome>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
