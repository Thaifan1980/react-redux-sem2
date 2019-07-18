import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  items: [],
  totalCost: 0,
  quantity: 0
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const addingProduct = action.payload.product;

      const duplicate = state.items.find(e => {
        if (e.id === addingProduct.id) {
          e.quantity += 1;
          return true;
        }
        return false;
      });

      if (!duplicate) {
        state.items.push({ ...addingProduct, quantity: 1 });
      }

      return {
        ...state,
        items: [...state.items],
        totalCost: state.totalCost + +action.payload.product.amount,
        quantity: state.quantity + 1
      };
    }

    case REMOVE_FROM_CART: {
      const productId = action.payload;

      const itemToRemove = state.items.find(e => {
        if (e.id === productId && e.quantity <= 1) {
          return true;
        } else if (e.id === productId) {
          e.quantity -= 1;
          state.quantity -= 1;
          state.totalCost -= e.amount;
          return false;
        }
      });

      // console.log(itemToRemove);

      if (itemToRemove) {
        state.items = state.items.filter(e => e.id !== itemToRemove.id);
        state.quantity -= 1;
        state.totalCost -= itemToRemove.amount;
      }

      return {
        ...state
      };
    }

    default:
      return state;
  }
}
