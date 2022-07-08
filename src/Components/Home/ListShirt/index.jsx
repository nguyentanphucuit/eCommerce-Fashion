import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card, Col, Row } from 'react-bootstrap';

import './styles.css';

ListShirt.propTypes = {};

function ListShirt(props) {
  const listShirt = props.listShirt;
  return (
    <div className="listShirt">
      <Row>
        {listShirt.map((shirt) => (
          <React.Fragment key={shirt.src}>
            <Col>
              <Image className="shirt__img" src={shirt.src}></Image>
              <div className="shirt__name">{shirt.name}</div>
              <div className="shirt__price">{formatPrice(shirt.price)}</div>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
}

const formatPrice = (price) => {
  return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export default ListShirt;
