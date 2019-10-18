export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';

import Product from '../../models/product';

export const getProducts = () => async dispatch => {
  try {
    const res = await fetch(
      'https://rn-shop-app-d5880.firebaseio.com/products.json'
    );

    if (!res.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await res.json();
    //console.log(resData);
    const loadedProducts = [];
    for (const key in resData) {
      loadedProducts.push(
        new Product(
          key,
          'u1',
          resData[key].title,
          resData[key].imageUrl,
          resData[key].description,
          resData[key].price
        )
      );
    }

    dispatch({
      type: GET_PRODUCTS,
      payload: loadedProducts
    });
  } catch (err) {
    // console.error(err.message);
    // dispatch({
    //   type: GET_PRODUCTS,
    //   payload: err.response.statusText
    // });
    throw err;
  }
};

export const deleteProduct = productId => {
  return { type: DELETE_PRODUCT, pid: productId };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async dispatch => {
    const response = await fetch(
      'https://rn-shop-app-d5880.firebaseio.com/products.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify({ title, description, imageUrl, price })
      }
    );

    const resData = response.json();
    console.log(resData);

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title,
        description,
        imageUrl,
        price
      }
    });
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imageUrl
    }
  };
};
