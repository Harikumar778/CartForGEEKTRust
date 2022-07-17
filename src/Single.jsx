import { CartState } from "./Context";

function Single({ subItems }) {
  const {
    state: { cart },
    dispatch
  } = CartState();

  console.log(cart);

  return (
    <div>
      {subItems.name}
      <img src={subItems.imageURL} alt="" height="100px" width="100px" />

      {cart.some((p) => p.id === subItems.id) ? (
        <button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: subItems
            });
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: subItems
            });
          }}
          disabled={!subItems.quantity}
        >
          {!subItems.quantity ? "Out of Stock" : "Add to Cart"}
        </button>
      )}
    </div>
  );
}

export default Single;
