import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Platform } from 'react-native';
import ProdOverviewScreen from '../screens/shop/ProductsOverviewShop';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProdOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(ProductsNavigator);
