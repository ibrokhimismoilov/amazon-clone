import React from "react";
import imgAdver from "../../assets/images/jpg/amazon-ad.jpg";
import SubTotal from "../../components/SubTotal";
import { useStateValue } from "../../context/StateProvider";
import CheckoutItem from "./checkout-item";
export default function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout auto-container">
      <div className="checkout__main">
        <div className="checkout__main-ad">
          <img src={imgAdver} alt="amazon" />
        </div>
        <h2 className="checkout__main-title">Your shopping basket</h2>

        {basket?.map((item) => (
          <CheckoutItem {...item} />
        ))}
      </div>
      <div className="checkout__sidebar">
        <SubTotal />
      </div>
    </div>
  );
}
