import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
          <span className="text-dark">  Learn</span>Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/courses" className="text-dark px-3 mt-1">Courses</Nav.Link>

            <Form className="d-flex mx-lg-3 flex-grow-1" style={{ minWidth: '400px' }}>
              <FormControl
                type="search"
                placeholder="Search for anything"
                className="rounded-pill border-dark bg-light px-4"
                aria-label="Search"
              />
            </Form>
          </Nav>

          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/business" className="d-none d-xl-block text-dark px-3">LearnHub Business</Nav.Link>
            <Nav.Link as={Link} to="/teach" className="d-none d-xl-block text-dark px-3">Teach on LearnHub</Nav.Link>
            <Nav.Link href="#cart" className="text-dark px-3 fs-5"><FaShoppingCart /></Nav.Link>
            <div className="d-flex gap-2 ms-3 ms-lg-0 mt-3 mt-lg-0">
              <Button variant="outline-dark" className="rounded-0 fw-bold px-4">Log in</Button>
              <Button variant="dark" className="rounded-0 fw-bold px-4">Sign up</Button>
              <Button variant="outline-dark" className="rounded-0 px-3 d-none d-sm-block"><FaGlobe /></Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
