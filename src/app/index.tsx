// App.tsx

import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View ,FlatList, Button} from 'react-native';
import { Link } from 'expo-router';


const polls =[{id:1},{id:2},{id:3}]

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
        renderItem={({item})=>(
          <Link href={`/polls/${item.id}`} style={styles.pollContainer}>
   
        <Text style={styles.pollTitle}>{item.id}: Example poll question</Text>
     
      </Link>
        )}
      />
   

</>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:10,
// work tomorrow

  },

  pollContainer:{
    backgroundColor: 'white',
    padding:10,
    borderRadius:5,
    marginVertical:10,
  },
  pollTitle:{
    fontWeight:"bold",
    fontSize:16,
  }
});
