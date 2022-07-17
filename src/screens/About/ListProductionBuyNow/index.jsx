import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import CardImageButton from "../CardImageButton";
import { listProductionBuyNow } from "constants/data";

const ListProductionBuyNow = () => {
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
        <Row>{listProductionBuyNow.map(renderItem)}</Row>
      </div>
    );
  }, []);

  return <div className="listProductionBuyNow">{renderListBuyNow}</div>;
};

export default React.memo(ListProductionBuyNow);
