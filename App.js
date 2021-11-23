import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  return (
    <>
      <ShopNavigator />
      <StatusBar style="auto" />
    </>
  );
}
