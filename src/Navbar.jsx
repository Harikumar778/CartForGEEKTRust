import { CartState } from "./Context";

function Navbar() {
  const {
    state: { cart },
    dispatch
  } = CartState();

  return (
    <div>
      <div>{cart.length}</div>
      {cart.map((prod) => (
        <div>{prod.name}</div>
      ))}
    </div>
  );
}

export default Navbar;
