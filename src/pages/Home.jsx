import React from 'react';
import CourseList from '../components/CourseList';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
