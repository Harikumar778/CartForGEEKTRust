import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const ACTIONS = {
  API_REQ: "api_req",
  FETCH_DATA: "fetch_data",
  ERROR: "error"
};

const initialState = {
  data: [],
  loading: false,
  error: null,
  cart: []
};

function reducer(state, { type, payload }) {
  const ACTIONS = {
    API_REQ: "api_req",
    FETCH_DATA: "fetch_data",
    ERROR: "error"
  };

  switch (type) {
    case ACTIONS.API_REQ:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: [...state.data, payload], loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: true };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c.id !== payload.id) };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === payload.id ? (c.qty = payload.qty) : c.qty
        )
      };
    default:
      return state;
  }
}

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQ });
    axios
      .get(
        `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
      )
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, []);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;
export const Cart = createContext();
export const CartState = () => {
  return useContext(Cart);
};
