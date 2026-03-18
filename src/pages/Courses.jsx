import React from 'react';
import CourseList from '../components/CourseList';

const Courses = () => {
  return (
    <div className="bg-light min-vh-100 pt-5 mt-5">
      <div className="container py-4">
        <h1 className="fw-bold text-dark mb-4">Explore All Courses</h1>
        <p className="text-muted mb-5">Browse our complete catalog of industry-leading courses and hands-on projects.</p>
      </div>
      <CourseList />
    </div>
  );
};

export default Courses;
