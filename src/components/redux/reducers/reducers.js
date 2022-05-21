const initailState = {
  cartItems: [],
};

export const cartReducer = (state = initailState, { type, payload }) => {
  console.log("NEW PAUJK",payload);

  switch (type) {
    case "increment":
      state.cartItems.push(payload)
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case "decrement":
        // state.cartItems.pop(payload)
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
