import React from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles.css";
import { MEN, ICON_QUOTE } from "constants/images";

TestimonialsItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  comment: PropTypes.string,
};

function TestimonialsItem(props) {
  const { name = "Name", avatar = MEN, comment = "" } = props;
  return (
    <div className="testimonialsItem">
      {!!avatar && <Image className="avatar" src={avatar} fluid />}
      <div className="wrapContent">
        <Image className="icon_quote" src={ICON_QUOTE} fluid />
        {!!comment && <p className="comment">{comment}</p>}
        {!!name && <p className="name">{name}</p>}
      </div>
    </div>
  );
}

const isEqual = (preProps, curProps) => {
  if (preProps.name !== curProps.name || preProps.image !== curProps.image)
    return false;
  return true;
};

export default React.memo(TestimonialsItem, isEqual);
