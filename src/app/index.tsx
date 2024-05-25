// App.tsx

import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View ,FlatList, Button} from 'react-native';


const polls =[1,2,3]

export default function HomeScreen() {
  return (
    <>
    <Stack.Screen options={{
      
      title:"Polls App",
      headerStyle:{
        backgroundColor:"#02e0c6"
      },
      headerTintColor:"black",
      headerTitleStyle:{
        fontWeight:"bold"
      }
      
      }}/>


      <FlatList 

        data={polls}
       
        contentContainerStyle={styles.container}
        renderItem={()=>(
          <View style={styles.pollContainer}>
        <Text style={styles.pollTitle}>Example poll question</Text>
      </View>
        )}
      />

</>

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
