import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import CardImageButton from "../CardImageButton";
import "../styles.css";
import { listTheFounders } from "constants/data";

const ListTheFounders = () => {
  const renderItem = (item) => {
    return (
      <Col key={item.id}>
        <CardImageButton image={item.image} />
      </Col>
    );
  };

  const renderListBuyNow = useMemo(() => {
    return (
      <div className="list">
        <Row>{listTheFounders.map(renderItem)}</Row>
      </div>
    );
  }, []);

  return (
    <div className="listTheFounders">
      <h2>The Founders</h2>
      {renderListBuyNow}
    </div>
  );
};

export default React.memo(ListTheFounders);
