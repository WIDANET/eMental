import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Header from '../../components/HeaderBack';


export default function App() {
  return (
    
    <View style={styles.container}>
        <Header />
        
      <Text style={styles.homeText}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
  },
  homeText: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#333', 
  }
});
