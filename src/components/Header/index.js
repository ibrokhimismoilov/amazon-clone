import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/png/amazon_logo.png";
import { useStateValue } from "../../context/StateProvider";
export default function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logoImg} alt="amazon" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <BiSearchAlt2 className="header__search-icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-lineOne">Hello gust</span>
          <span className="header__option-lineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__option-lineOne">Returns</span>
          <span className="header__option-lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-lineOne">Your</span>
          <span className="header__option-lineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__option header__option-cart">
          <IoCartOutline className="header__option-cart-icon" />
          <span className="header__option-cart-text">{basket?.length}</span>
        </Link>
      </div>
    </div>
  );
}
