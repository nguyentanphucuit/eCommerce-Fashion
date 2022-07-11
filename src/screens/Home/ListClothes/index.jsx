import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card, Col, Row } from 'react-bootstrap';

import './styles.css';

ListClothes.propTypes = {};

function ListClothes(props) {
  const listClothes = props.listClothes;
  const title = props.title;
  const subTitle = props.subTitle;
  return (
    <div className="listClothes">
      <div className="homepage__discover">
        <div className="homepage__title">{title}</div>
        <div className="homepage__subtitle">{subTitle}</div>
      </div>
      <Row>
        {listClothes.map((clothes) => (
          <React.Fragment key={clothes.src}>
            <Col className="clothes">
              <Image className="clothes__img" src={clothes.src}></Image>
              <div className="clothes__name">{clothes.name}</div>
              <div className="clothes__price">{formatPrice(clothes.price)}</div>
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

export default ListClothes;
