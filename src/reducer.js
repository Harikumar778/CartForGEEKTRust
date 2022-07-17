export function reducer(state, { type, payload }) {
  const ACTIONS = {
    API_REQ: "api_req",
    FETCH_DATA: "fetch_data",
    ERROR: "error"
  };

  switch (type) {
    case ACTIONS.API_REQ:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: true };
    default:
      return state;
  }
}
