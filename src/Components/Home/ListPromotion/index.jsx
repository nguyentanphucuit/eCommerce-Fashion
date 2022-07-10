import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Button, Col, Row } from 'react-bootstrap';

ListPromotion.propTypes = {};

const listPromotion = [
  {
    title: 'PEACE OF MIND',
    subTitle: 'A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.',
    col: 'col-7',
  },
  {
    title: 'BUY 2 GET 1 FREE',
    subTitle: 'End of season sale. Buy any 2 items of your choice and get 1 free.',
    col: 'col-5',
  },
];

function ListPromotion(props) {
  return (
    <Row className="listPromotion">
      {listPromotion.map((promo) => (
        <Col className={promo.col + ' promo'} key={promo.title}>
          <div>
            <p className="promo__title">{promo.title}</p>
            <p className="promo__subTitle">{promo.subTitle}</p>
            <Button variant="light" className="px-4 rounded-0">
              BUY NOW
            </Button>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default ListPromotion;
