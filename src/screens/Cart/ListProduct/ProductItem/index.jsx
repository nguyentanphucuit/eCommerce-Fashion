import React from "react";
import PropTypes from "prop-types";
import { Col, Image, Row } from "react-bootstrap";
import "../../styles.css";
import { MEN } from "constants/images";

ProductItem.propTypes = {
  isHeader: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.string || PropTypes.number,
  quantity: PropTypes.string || PropTypes.number,
  total: PropTypes.string || PropTypes.number,
};

function ProductItem(props) {
  const { isHeader = false, name, price, quantity, total } = props;
  if (isHeader) {
    return (
      <Row className="headerProductItem">
        <Col className="nothing" />
        <Col xs={1} className="nothing" />
        <Col xs={4} className="header">
          {name}
        </Col>
        <Col className="header">{price}</Col>
        <Col className="header">{quantity}</Col>
        <Col className="header">{total}</Col>
      </Row>
    );
  }
  return (
    <Row className="productItem">
      <Col xs={1} className="remove">
        <button>x</button>
      </Col>
      <Col className="image">
        <Image className="imageProduct" src={MEN} fluid />
      </Col>
      <Col xs={4} className="name">
        {name}
      </Col>
      <Col className="price">${price}</Col>
      <Col className="quantity">
        <div>{quantity}</div>
      </Col>
      <Col className="total">${total}</Col>
    </Row>
  );
}

const isEqual = (preProps, curProps) => {
  if (
    preProps.name !== curProps.name ||
    preProps.price !== curProps.price ||
    preProps.quantity !== curProps.quantity ||
    preProps.total !== curProps.total
  )
    return false;
  return true;
};

export default React.memo(ProductItem, isEqual);
