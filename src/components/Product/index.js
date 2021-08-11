import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { ADD_TO_BASKET } from "../../context/types";
function Product({ title, img, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log(basket);

    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id,
        img,
        title,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__desc">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <ul className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <li key={id}>⭐️</li>
            ))}
        </ul>
      </div>
      <div className="product__img">
        <img src={img} alt={title} />
      </div>
      <button onClick={addToBasket} className="btn btn__primary">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
