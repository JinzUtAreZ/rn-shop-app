import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cartAction';

const ProductsDetailsShop = props => {
  const productId = props.navigation.getParam('productId');
  const selProduct = useSelector(state =>
    state.products.availProducts.find(prod => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selProduct.imageUrl }} />
      <View style={styles.btn}>
        <Button
          color={Colors.btncolor}
          title="Add To Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selProduct));
          }}
        ></Button>
      </View>
      <Text style={styles.price}>₱ {selProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selProduct.description}</Text>
    </ScrollView>
  );
};

ProductsDetailsShop.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  btn: {
    marginVertical: 10,
    alignItems: 'center'
  }
});
export default ProductsDetailsShop;
