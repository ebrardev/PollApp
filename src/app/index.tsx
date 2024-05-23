// App.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text >hellos!</Text>

      <View style={styles.pollContainer}>
        <Text style={styles.pollTitle}>Example poll question</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    padding:10,
// work tomorrow

  },

  pollContainer:{
    backgroundColor: '#fff',
    padding:10,
    borderRadius:5,
  },
  pollTitle:{
    fontWeight:"bold",
    fontSize:16,
  }
});
