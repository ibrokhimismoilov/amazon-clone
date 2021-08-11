import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import logoImg from "../../assets/images/png/amazon_logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logoImg} alt="amazon" />
      </div>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <BiSearchAlt2 className="header__search-icon" />
      </div>

      <div className="header__nav">
        {/* // translation
        <div className="header__option">
          <span className="header__option-lineOne">Hello gust</span>
          <span className="header__option-linetwo">Sign in</span>
        </div> */}

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
        <div className="header__option header__option-cart">
          <IoCartOutline className="header__option-cart-icon" />
          <span className="header__option-cart-text">$12 450 000 000</span>
        </div>
      </div>
    </div>
  );
}
