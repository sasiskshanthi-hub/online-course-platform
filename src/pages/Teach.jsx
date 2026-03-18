import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Teach = () => {
  return (
    <div className="bg-white pt-5 mt-5 pb-5 min-vh-100">
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col lg={6} className="order-lg-2">
            <h1 className="display-4 fw-bold mb-4 text-dark">
              Come Teach with Us
            </h1>
            <p className="lead text-muted mb-4">
              Become an instructor and change lives — including your own. Reach millions of learners globally, earn money, and build your personal brand.
            </p>
            <Button variant="dark" size="lg" className="rounded-0 fw-bold px-5 mt-3">
              Get Started
            </Button>
          </Col>
          <Col lg={6} className="order-lg-1 mt-5 mt-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Instructor teaching" 
              className="img-fluid rounded border shadow" 
            />
          </Col>
        </Row>

        <div className="mt-5 pt-5">
          <h2 className="fw-bold text-center mb-5">How to Begin</h2>
          <Row className="g-4 text-center">
            <Col md={4}>
              <div className="p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  1
                </div>
                <h4 className="fw-bold mb-3">Plan your curriculum</h4>
                <p className="text-muted">You start with your passion and knowledge. Then choose a topic and plan your course with our intuitive tools.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  2
                </div>
                <h4 className="fw-bold mb-3">Record your video</h4>
                <p className="text-muted">Use basic equipment and our best practices guide to record high-quality training materials from home.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  3
                </div>
                <h4 className="fw-bold mb-3">Build your community</h4>
                <p className="text-muted">Publish your course, engage with students through Q&A, and start earning money from global enrollments.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Teach;
