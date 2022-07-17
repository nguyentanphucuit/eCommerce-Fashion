import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import TestimonialsItem from "./TestimonialsItem";
import { listTestimonials } from "constants/data";

const ListTestimonials = () => {
  const renderItem = (item) => {
    return (
      <TestimonialsItem
        name={item.by}
        avatar={item.avatar}
        comment={item.comment}
      />
    );
  };

  const renderListTestimonials = useMemo(() => {
    return (
      <div className="list">
        <Col>{listTestimonials.map(renderItem)}</Col>
      </div>
    );
  }, []);

  return (
    <div className="listTestimonials">
      <h2>Testimonials</h2>
      {renderListTestimonials}
    </div>
  );
};

export default React.memo(ListTestimonials);
