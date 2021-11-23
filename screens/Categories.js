import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Categories({ navigation }) {
  useEffect(() => {
    console.log('categories')
  }, []);

  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
      <Button onPress={() => navigation.navigate('Products')} title="IR A LOS PRODUCTOS" />
      <Button onPress={() => navigation.navigate('Detail')} title="IR AL DETALLE" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
