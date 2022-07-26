import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import slideHomepage from "../../assets/images/slide-homepage.png";
import "./styles.css";
import denimJacket from "../../assets/images/denim-jacket.png";
import plainWhiteShirt from "../../assets/images/plain-white-shirt.png";
import blackPoloShirt from "../../assets/images/black-polo-shirt.png";
import blueSwearShirt from "../../assets/images/blue-sweatshirt.png";
import bluePlainShirt from "../../assets/images/blue-plain-shirt.png";
import darkBlueShirt from "../../assets/images/dark-blue-shirt.png";
import outcastTShirt from "../../assets/images/outcast-t-shirt.png";
import poloPlainShirt from "../../assets/images/polo-plain-shirt.png";
import greyPoloShirt from "../../assets/images/gray-polo-shirt.png";
import redShirt from "../../assets/images/red-shirt.png";
import poloWhiteShirt from "../../assets/images/polo-white-shirt.png";
import pinkCasualShirt from "../../assets/images/pink-casual-shirt.png";
import ListBenefit from "./ListBenefit";
import ListPromotion from "./ListPromotion";
import ListClothes from "./ListClothes";

Home.propTypes = {};

function Home(props) {
  const listDiscovers = [
    { name: "Plain White Shirt", price: 29, src: plainWhiteShirt },
    { name: "Denim Jacket", price: 69, src: denimJacket },
    { name: "Black Polo Shirt", price: 49, src: blackPoloShirt },
    { name: "Blue Sweatshirt", price: 79, src: blueSwearShirt },
    { name: "Blue Plain Shirt", price: 49, src: bluePlainShirt },
    { name: "Dark Blue Shirt", price: 89, src: darkBlueShirt },
    { name: "Outcast T Shirt", price: 19, src: outcastTShirt },
    { name: "Polo Plain Shirt", price: 29, src: poloPlainShirt },
  ];

  const listTopSellers = [
    { name: "Grey Polo Shirt", price: 49, src: greyPoloShirt },
    { name: "Red Shirt", price: 69, src: redShirt },
    { name: "Polo White Shirt", price: 29, src: poloWhiteShirt },
    { name: "Pink Casual Shirt", price: 39, src: pinkCasualShirt },
  ];

  return (
    <div className="homepage">
      <Image src={slideHomepage} fluid></Image>
      <ListClothes
        listClothes={listDiscovers}
        title="Discover NEW Arrivals"
        subTitle="Recently added shirts!"
      />
      <ListBenefit />
      <ListPromotion />
      <ListClothes
        listClothes={listTopSellers}
        title="Top Seller"
        subTitle="Browse our top-selling products"
      />
    </div>
  );
}

export default Home;
