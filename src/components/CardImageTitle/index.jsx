import React from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "./styles.css";

CardImageTitle.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

function CardImageTitle(props) {
  const { title, image } = props;
  return (
    <div className="cardImageTitle">
      {!!image && <Image src={image} width="100%" />}
      {!!title && <div className="title">{title}</div>}
    </div>
  );
}

export default React.memo(CardImageTitle);
