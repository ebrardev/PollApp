// App.tsx

import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';


const polls =[1,2,3]

export default function HomeScreen() {
  return (


      <FlatList 

        data={polls}
        style={{backgroundColor:"gainsboro"}}
        contentContainerStyle={styles.container}
        renderItem={()=>(
          <View style={styles.pollContainer}>
        <Text style={styles.pollTitle}>Example poll question</Text>
      </View>
        )}
      />

  

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
    marginVertical:10,
  },
  pollTitle:{
    fontWeight:"bold",
    fontSize:16,
  }
});
