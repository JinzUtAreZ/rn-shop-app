import PRODUCTS from '../../data/dummy-data';

const initialState = {
  availProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
  return state;
};
