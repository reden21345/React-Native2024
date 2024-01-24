import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ProductContainer from './Screens/Product/ProductContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductContainer/>
    </View>
  );
}
