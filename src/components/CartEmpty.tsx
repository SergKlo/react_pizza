import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty:React.FC = () => {
  return (
    <div>
      <div className="cart cart--empty">
        <h2>
          Cart clear <span>😕</span>
        </h2>
        <p>
          You probably haven't ordered pizza yet.
          <br />
          To order pizza, go to the main page.
        </p>
        <img src={CartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
