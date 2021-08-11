import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

function SubTotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      {/* <h2 className="subtotal__title">The subtotal will go here</h2> */}

      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket?.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <label>
                  <input type="checkbox" />
                  This order contains a gift
                </label>
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="btn btn__primary">Proced to checkout</button>
    </div>
  );
}

export default SubTotal;
