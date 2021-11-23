import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Products() {
  useEffect(() => {
    console.log('Productos')
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Productos</Text>
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
