import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewShop = props => {
  const products = useSelector(state => state.products.availProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductsOverviewShop.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewShop;
