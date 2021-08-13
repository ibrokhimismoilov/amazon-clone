import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { REMOVE_FROM_BASKET } from "../../context/types";

function CheckoutItem({ id, img, title, price, rating }) {
  //   console.log(id, img, title, price, rating);
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      id,
      type: REMOVE_FROM_BASKET,
    });
  };

  return (
    <div className="checkout__item">
      <div className="img">
        <img src={img} alt="amazon" />
      </div>
      <div className="content">
        <p className="content__title">{title}</p>
        <p className="content__prise">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <ul className="content__rating">
          {Array(rating)
            .fill()
            .map((item, index) => (
              <li key={index}>⭐️</li>
            ))}
        </ul>
        <button onClick={removeFromBasket} className="btn btn__primary">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
