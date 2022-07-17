import React from "react";
import { Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "./styles.css";
import { MEN } from "constants/images";

CardImageButton.propTypes = {
  image: PropTypes.string,
};

function CardImageButton(props) {
  const { image = MEN } = props;
  return (
    <div className="cardImageButton">
      {!!image && <Image className="image" src={image} fluid />}
      <Button type="button" className="btnBuyNow">
        BUY NOW
      </Button>
    </div>
  );
}

const isEqual = (preProps, curProps) => {
  if (preProps.image !== curProps.image) return false;
  return true;
};

export default React.memo(CardImageButton, isEqual);
