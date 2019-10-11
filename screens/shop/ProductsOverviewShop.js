import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cartAction'

const ProductsOverviewShop = props => {
  const products = useSelector(state => state.products.availProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            });
          }}
          onAddToCart={() => {dispatch(cartActions.addToCart(itemData.item))}}
        />
      )}
    />
  );
};

ProductsOverviewShop.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewShop;
