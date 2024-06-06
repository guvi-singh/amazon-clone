import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./Reducer";

function Subtotal() {
  const [{ basket, totalPrice }] = useStateValue();
  const history = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal {basket ? basket.length : 0} items:{" "}
              <strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button onClick={(e) => history("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
