import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Academic from './components/academicpage/Academic'
import FrontPage from './components/frontpage/FrontPage';
import WorkExperience from './components/workexperiencepage/WorkExperience';
import Skills from './components/skillspage/Skills';
import ScrollToTop from './components/shared/ScrollToTop';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
            <ScrollToTop />
            <Header />
                <Routes>
                    <Route path="/" element={<FrontPage />}></Route>
                    <Route path="/academic" element={<Academic />}></Route>
                    <Route path="/workexperience" element={<WorkExperience />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                </Routes>
        </Router>
    </div>

    <Footer></Footer>
    </div>
  );
}

export default App;