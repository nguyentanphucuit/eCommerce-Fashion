import React from "react";
import PropTypes from "prop-types";
import { Col, Row, InputGroup, FormControl, Image } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import visa from "../../assets/images/visa.png";
import visaElectron from "../../assets/images/visa-electron.png";
import masterCard from "../../assets/images/master-card.png";
import paypal from "../../assets/images/paypal.png";
import "./styles.css";

Footer.propTypes = {};

const listFooter = [
  {
    title: "COMPANY INFO",
    subTitle: ["About Us", "Latest Posts", "Contact Us", "Shop"],
    isEmailInput: false,
  },
  {
    title: "HELP LINKS",
    subTitle: ["Tracking", "Order Status", "Delivery", "Shipping Info", "FAQ"],
    isEmailInput: false,
  },
  {
    title: "USEFUL LINKS",
    subTitle: ["Special Offers", "Gift Cards", "Advetising", "Terms of Use"],
    isEmailInput: false,
  },
  { title: "GET IN THE KNOW", subTitle: [], isEmailInput: true },
];

const listFooterBottom = [
  { src: visa },
  { src: masterCard },
  { src: paypal },
  { src: visaElectron },
];

function Footer(props) {
  return (
    <Row className="listFooter">
      {listFooter.map((footer) => (
        <Col className="col footer" key={footer.title}>
          <p className="footer__title">{footer.title}</p>
          {footer.subTitle.map((sub) => (
            <p className="footer__subTitle" key={sub}>
              {sub}
            </p>
          ))}
          {footer.isEmailInput && (
            <InputGroup className="mb-3 ">
              <FormControl
                className="footer__input border-0 "
                placeholder="Enter email"
                aria-label="Enter email"
                aria-describedby="basic-addon2"
              />
              <div className="footer__chevron">
                <ChevronRight></ChevronRight>
              </div>
            </InputGroup>
          )}
        </Col>
      ))}

      <hr />
      <Row className="footer__bottom justify-content-start">
        <Col className="text-start">
          <p style={{ margin: "10px" }}>© 2020 NorthStar eCommerce</p>
          <p>Privacy Policy Terms & Conditions</p>
        </Col>
        <Col className="align-self-center text-end ">
          {listFooterBottom.map((footerBottom) => (
            <Image
              className="px-2"
              src={footerBottom.src}
              key={footerBottom.src}
            ></Image>
          ))}
        </Col>
      </Row>
    </Row>
  );
}

export default Footer;
