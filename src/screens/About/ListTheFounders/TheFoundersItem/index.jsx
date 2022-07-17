import React from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles.css";
import { MEN } from "constants/images";

TheFoundersItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

function TheFoundersItem(props) {
  const { name = "Name", image = MEN } = props;
  return (
    <div className="theFoundersItem">
      {!!image && <Image className="image" src={image} fluid />}
      {!!name && <p className="name">{name}</p>}
    </div>
  );
}

const isEqual = (preProps, curProps) => {
  if (preProps.name !== curProps.name || preProps.image !== curProps.image)
    return false;
  return true;
};

export default React.memo(TheFoundersItem, isEqual);
