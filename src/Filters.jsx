import { CartState } from "./Context";

function Filters() {
  const {
    productState: { gender },
    productDispatch
  } = CartState();

  return (
    <div>
      <span>
        <input
          type="radio"
          name="group1"
          onChange={productDispatch({
            type: "SORT_BY_GENDER",
            payload: "hightolow"
          })}
        />
        <label htmlFor="group1">Men</label>
      </span>
      <span>
        <input type="radio" name="group1" />
        <label htmlFor="group1">Women</label>
      </span>
      <span>
        <input type="radio" name="group1" />
        <label htmlFor="group1">All</label>
      </span>
      <button>Clear</button>
    </div>
  );
}

export default Filters;
