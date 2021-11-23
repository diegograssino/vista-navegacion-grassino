import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../screens/Categories';
import Products from '../screens/Products';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Shop" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default ShopNavigator;