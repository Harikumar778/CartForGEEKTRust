import { useEffect, useState } from "react";
import { CartState } from "./Context";

function CartPage() {
  const {
    state: { cart },
    dispatch
  } = CartState();

  const [total, setTotal] = useState([]);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
      <h2>Inside the Cart</h2>
      <h3>{total}</h3>
      {cart.map((ele) => (
        <div>
          <div>{ele.name}</div>
          <img src={ele.imageURL} alt="" height="120px" />
          <select
            onChange={(e) =>
              dispatch({
                type: "CHANGE_CART_QTY",
                payload: {
                  id: ele.id,
                  qty: e.target.value
                }
              })
            }
            value={ele.qty}
          >
            {[...Array(ele.quantity).keys()].map((x) => (
              <option key={x + 1}>{x + 1}</option>
            ))}
          </select>
          <button
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: ele
              });
            }}
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
