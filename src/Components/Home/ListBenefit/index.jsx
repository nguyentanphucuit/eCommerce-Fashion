import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import freeShip from '../../../Assets/Images/free-ship.png';
import support247 from '../../../Assets/Images/support-247.png';
import daysReturn from '../../../Assets/Images/days-return.png';
import paymentSecure from '../../../Assets/Images/payment-secure.png';
import './styles.css';

ListBenefit.propTypes = {};

const listBenefit = [
  { src: freeShip, title: 'FREE SHIPPING', subTitle: 'Enjoy free shipping on all orders above $100' },
  { src: support247, title: 'SUPPORT 24/7', subTitle: 'Our support team is there to help you for queries' },
  { src: daysReturn, title: '30 DAYS RETURN', subTitle: 'Simply return it within 30 days for an exchange.' },
  { src: paymentSecure, title: '100% PAYMENT SECURE', subTitle: 'Our payments are secured with 256 bit encryption' },
];

function ListBenefit(props) {
  return (
    <Row className="benefit">
      {listBenefit.map((benefit) => (
        <Col>
          <Row key={benefit.src}>
            <Col className="col-2">
              <Image src={benefit.src}></Image>
            </Col>
            <Col className="col text-start">
              <p className="benefit__title">{benefit.title}</p>
              <p className="benefit__subTitle">{benefit.subTitle}</p>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
}

export default ListBenefit;
