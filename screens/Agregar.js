import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Agregar() {
  return (
    <>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Screen "Elegir Mesa"</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.description}>
          Screen "Agregar producto a pedido"
        </Text>
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
