import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  const { title, instructor, duration, rating, reviews, price, thumbnail } = course;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
      } else {
        stars.push(<FaStar key={i} className="text-muted" style={{ opacity: 0.3 }} />);
      }
    }
    return stars;
  };

  return (
    <Card className="h-100 border-0 course-card cursor-pointer">
      <div className="position-relative">
        <Card.Img variant="top" src={thumbnail} alt={title} className="rounded-0 border" style={{ height: '160px', objectFit: 'cover' }} />
        {rating >= 4.7 && <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-2 fw-bold">Bestseller</Badge>}
      </div>
      <Card.Body className="d-flex flex-column px-1 py-3">
        <Card.Title className="fs-6 fw-bold" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{title}</Card.Title>
        <Card.Text className="text-muted small mb-1">{instructor}</Card.Text>
        <div className="d-flex align-items-center mb-1">
          <span className="text-warning fw-bold me-1">{rating}</span>
         
        </div>
        <div className="d-flex align-items-center mt-auto">
          <span className="fw-bold fs-5">₹{price.toLocaleString('en-IN')}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
