import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Productos({ navigation }) {
  return (
    <>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Screen "Elegir Mesa"</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.description}>
          Screen "Listado de productos"
        </Text>
        <Button
          onPress={() => navigation.navigate('Agregar')}
          title="Navegar a Agregar"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkred',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: 'white',
    fontSize: 20,
  },
  descriptionContainer: {
    backgroundColor: 'darkred',
    alignItems: 'center',
  },
});
