import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import slideHomepage from '../../Assets/Images/slide-homepage.png';
import NavBar from '../../Layouts/NavBar';
import './styles.css';
import ListShirt from './ListShirt';
import plainWhiteShirt from '../../Assets/Images/plain-white-shirt.png';
import denimJacket from '../../Assets/Images/denim-jacket.png';
import blackPoloShirt from '../../Assets/Images/black-polo-shirt.png';
import blueSwearShirt from '../../Assets/Images/blue-sweatshirt.png';
import bluePlainShirt from '../../Assets/Images/blue-plain-shirt.png';
import darkBlueShirt from '../../Assets/Images/dark-blue-shirt.png';
import outcastTShirt from '../../Assets/Images/outcast-t-shirt.png';
import poloPlainShirt from '../../Assets/Images/polo-plain-shirt.png';
import ListBenefit from './ListBenefit';
import ListPromotion from './ListPromotion';

Home.propTypes = {};

function Home(props) {
  const listShirtWoman = [
    { name: 'Plain White Shirt', price: 29, src: plainWhiteShirt },
    { name: 'Denim Jacket', price: 69, src: denimJacket },
    { name: 'Black Polo Shirt', price: 49, src: blackPoloShirt },
    { name: 'Blue Sweatshirt', price: 79, src: blueSwearShirt },
  ];

  const listShirtMen = [
    { name: 'Blue Plain Shirt', price: 49, src: bluePlainShirt },
    { name: 'Dark Blue Shirt', price: 89, src: darkBlueShirt },
    { name: 'Outcast T Shirt', price: 19, src: outcastTShirt },
    { name: 'Polo Plain Shirt', price: 29, src: poloPlainShirt },
  ];
  return (
    <div className="homepage">
      <NavBar />
      <Image src={slideHomepage} fluid></Image>
      <div className="homepage__discover">
        <div className="homepage__title">Discover NEW Arrivals</div>
        <div className="homepage__subtitle">Recently added shirts!</div>
      </div>
      <ListShirt listShirt={listShirtWoman} />
      <ListShirt listShirt={listShirtMen} />
      <ListBenefit />
      <ListPromotion />
    </div>
  );
}

export default Home;
