import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Home from './pages/Home';
import Business from './pages/Business';
import Teach from './pages/Teach';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <div className="bg-white min-vh-100 font-sans d-flex flex-column">
        <Navigationbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/business" element={<Business />} />
          <Route path="/teach" element={<Teach />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-dark text-white py-5 mt-auto">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-4">
                <h5 className="fw-bold fs-4 mb-3"><span className="text-white">Learn</span><span className="text-secondary">Hub</span></h5>
                <p className="text-secondary small">Empowering the world to develop skills for the future.</p>
              </div>
              <div className="col-6 col-md-2">
                <h6 className="fw-bold mb-3">LearnHub</h6>
                <ul className="list-unstyled text-secondary small">
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-white">About</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-white">Careers</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-white">Contact us</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-2">
                <h6 className="fw-bold mb-3">Community</h6>
                <ul className="list-unstyled text-secondary small">
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-white">Learners</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-white">Partners</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none hover-white">Developers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
