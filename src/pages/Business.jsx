import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Business = () => {
  return (
    <div className="bg-light pt-5 mt-5 pb-5 min-vh-100">
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-4 text-dark">
              Transform Your Organization with <span className="text-primary">LearnHub Business</span>
            </h1>
            <p className="lead text-muted mb-4">
              Upskill your teams with exclusive access to thousands of top-tier courses, guided projects, and certification programs from leading universities and industry experts.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Button variant="dark" size="lg" className="rounded-0 fw-bold px-4">Get Started</Button>
              <Button variant="outline-dark" size="lg" className="rounded-0 fw-bold px-4">Contact Sales</Button>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Business team" 
              className="img-fluid rounded border shadow" 
            />
          </Col>
        </Row>

        <div className="text-center mt-5 pt-4">
          <h2 className="fw-bold mb-5">Why Choose LearnHub Business?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <h4 className="fw-bold mb-3">Curated Content</h4>
                  <p className="text-muted">Access hand-picked learning paths customized to your industry and organizational goals.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <h4 className="fw-bold mb-3">Skill Tracking</h4>
                  <p className="text-muted">Advanced analytics and dashboards to measure progress, map skills, and demonstrate ROI.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <h4 className="fw-bold mb-3">Enterprise Security</h4>
                  <p className="text-muted">Single Sign-On (SSO), LMS integrations, and enterprise-grade data security protocols.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Business;
