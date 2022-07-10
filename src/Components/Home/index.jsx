import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import slideHomepage from '../../Assets/Images/slide-homepage.png';
import NavBar from '../../Layouts/NavBar';
import './styles.css';
import ListClothes from './ListClothes';
import plainWhiteShirt from '../../Assets/Images/plain-white-shirt.png';
import denimJacket from '../../Assets/Images/denim-jacket.png';
import blackPoloShirt from '../../Assets/Images/black-polo-shirt.png';
import blueSwearShirt from '../../Assets/Images/blue-sweatshirt.png';
import bluePlainShirt from '../../Assets/Images/blue-plain-shirt.png';
import darkBlueShirt from '../../Assets/Images/dark-blue-shirt.png';
import outcastTShirt from '../../Assets/Images/outcast-t-shirt.png';
import poloPlainShirt from '../../Assets/Images/polo-plain-shirt.png';
import greyPoloShirt from '../../Assets/Images/gray-polo-shirt.png';
import redShirt from '../../Assets/Images/red-shirt.png';
import poloWhiteShirt from '../../Assets/Images/polo-white-shirt.png';
import pinkCasualShirt from '../../Assets/Images/pink-casual-shirt.png';
import ListBenefit from './ListBenefit';
import ListPromotion from './ListPromotion';
import Footer from '../../Layouts/Footer';

Home.propTypes = {};

function Home(props) {
  const listDiscovers = [
    { name: 'Plain White Shirt', price: 29, src: plainWhiteShirt },
    { name: 'Denim Jacket', price: 69, src: denimJacket },
    { name: 'Black Polo Shirt', price: 49, src: blackPoloShirt },
    { name: 'Blue Sweatshirt', price: 79, src: blueSwearShirt },
    { name: 'Blue Plain Shirt', price: 49, src: bluePlainShirt },
    { name: 'Dark Blue Shirt', price: 89, src: darkBlueShirt },
    { name: 'Outcast T Shirt', price: 19, src: outcastTShirt },
    { name: 'Polo Plain Shirt', price: 29, src: poloPlainShirt },
  ];

  const listTopSellers = [
    { name: 'Grey Polo Shirt', price: 49, src: greyPoloShirt },
    { name: 'Red Shirt', price: 69, src: redShirt },
    { name: 'Polo White Shirt', price: 29, src: poloWhiteShirt },
    { name: 'Pink Casual Shirt', price: 39, src: pinkCasualShirt },
  ];

  return (
    <div className="homepage">
      <NavBar />
      <Image src={slideHomepage} fluid></Image>
      <ListClothes listClothes={listDiscovers} title="Discover NEW Arrivals" subTitle="Recently added shirts!" />
      <ListBenefit />
      <ListPromotion />
      <ListClothes listClothes={listTopSellers} title="Top Seller" subTitle="Browse our top-selling products" />
      <Footer />
    </div>
  );
}

export default Home;
