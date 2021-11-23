import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mesa from '../screens/Mesa';
import Productos from '../screens/Productos';
import Agregar from '../screens/Agregar';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Mesa" component={Mesa} />
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="Agregar" component={Agregar} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default ShopNavigator;
