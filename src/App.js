import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Academic from './components/academicpage/Academic'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FrontPage from './components/frontpage/FrontPage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/academic" element={<Academic /> }></Route>
            </Routes>
        </Router>



      <FrontPage />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;