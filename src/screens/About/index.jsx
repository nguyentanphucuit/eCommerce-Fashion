import React from "react";
import { CardImageTitle } from "components";
import ListTheFounders from "./ListTheFounders";
import ListProductionBuyNow from "./ListProductionBuyNow";
import "./styles.css";
import { NORTH_STAR } from "constants/images";

const About = () => {
  return (
    <div className="about">
      <CardImageTitle title="About Northstar" image={NORTH_STAR} />
      <div className="containerContent">
        <ListProductionBuyNow />
        <ListTheFounders />
      </div>
    </div>
  );
};

export default React.memo(About);
