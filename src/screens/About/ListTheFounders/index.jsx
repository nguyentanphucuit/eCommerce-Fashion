import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import TheFoundersItem from "./TheFoundersItem";
import "../styles.css";
import { listTheFounders } from "constants/data";

const ListTheFounders = () => {
  const renderItem = (item) => {
    return (
      <Col key={item.id}>
        <TheFoundersItem name={item.name} image={item.image} />
      </Col>
    );
  };

  const renderListTheFounders = useMemo(() => {
    return (
      <div className="list">
        <Row>{listTheFounders.map(renderItem)}</Row>
      </div>
    );
  }, []);

  return (
    <div className="listTheFounders">
      <h2>The Founders</h2>
      {renderListTheFounders}
    </div>
  );
};

export default React.memo(ListTheFounders);
