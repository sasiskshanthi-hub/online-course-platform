import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import CourseCard from './CourseCard';
import { coursesData } from '../data/courses';
import { FaSearch } from 'react-icons/fa';

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-5 pt-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 mt-5">
        <h2 className="fw-bold mb-3 mb-md-0">Learners are viewing</h2>
        <InputGroup className="w-100" style={{ maxWidth: '400px' }}>
          <Form.Control
            placeholder="Search courses by title or instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-dark"
          />
          <Button variant="dark" className="border-dark">
            <FaSearch />
          </Button>
        </InputGroup>
      </div>
      
      {filteredCourses.length > 0 ? (
        <Row className="g-4 mb-5">
          {filteredCourses.map((course) => (
            <Col key={course.id} xs={12} sm={6} md={4} lg={3}>
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center py-5 my-5">
          <h4 className="text-muted">No courses found matching "{searchTerm}"</h4>
        </div>
      )}
    </Container>
  );
};

export default CourseList;
