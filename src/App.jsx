import React from 'react';
import Navigationbar from './components/Navigationbar';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className="bg-white min-vh-100 font-sans">
      <Navigationbar />
      
      {/* Hero Section */}
      <div className="bg-light pt-5 mt-5 pb-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3 text-dark">Learn without limits</h1>
              <p className="lead text-muted mb-4">Start, switch, or advance your career with more than 10,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
              <div className="d-flex gap-2">
                <button className="btn btn-dark btn-lg rounded-0 fw-bold px-4">Join for Free</button>
                <button className="btn btn-outline-dark btn-lg rounded-0 fw-bold px-4">Try Business</button>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0 d-none d-md-block">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="img-fluid rounded border shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      <CourseList />
      
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
  );
}

export default App;
