import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Mesa({ navigation }) {
  return (
    <>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Screen "Elegir Mesa"</Text>
      </View>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('Productos')}
          title="Navegar a los productos"
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
