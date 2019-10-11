import { ADD_TO_CART } from '../actions/cartAction';
import CartItem from '../../models/cart';

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  //   switch (action.type) {
  //     case ADD_TO_CART:
  //       const addProduct = action.product;
  //       const prodPrice = addProduct.price;
  //       const prodTitle = addProduct.title;

  //       let UpdateOrNewCartItem;

  //       if (state.items[addProduct.id]) {
  //         // already added same item
  //         UpdateOrNewCartItem = new CartItem(
  //           state.items[addProduct.id].qty + 1,
  //           prodPrice,
  //           prodTitle,
  //           state.items[addProduct.id].sum + prodPrices
  //         );
  //       } else {
  //         UpdateOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
  //       }
  //       return {
  //         ...state,
  //         items: { ...state.items, [addProduct.id]: UpdateOrNewCartItem },
  //         totalAmount: state.totalAmount + prodPrice
  //       };

  //     default:
  //       break;
  //   }
  return state;
};
