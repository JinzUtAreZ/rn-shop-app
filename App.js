import React, { useState } from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './store/reducers/productsReducer';
import cartReducer from './store/reducers/cartReducer';
import ShopNavigator from './navigation/ShopNavigator';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { composeWithDevTools } from 'redux-devtools-extension';
/// remove composeWithDevTools in production of app

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  const [fontLoad, isFontLoad] = useState(false);
  if (!fontLoad) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => isFontLoad(true)} />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
