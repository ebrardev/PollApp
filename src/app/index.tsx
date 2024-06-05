// App.tsx

import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,FlatList, Button, Alert} from 'react-native';
import { Link } from 'expo-router';
import {AntDesign} from "@expo/vector-icons"
import { supabase } from '../lib/supabase';




export default function HomeScreen() {

  const [polls,setPolls] = useState([])

  useEffect(()=>{
    const fetchPolls= async () =>{
  console.log("fetching..")
   let {data,error} = await supabase.from("polls").select("*");
   if(error) {
    Alert.alert("error fatching data")
   }
   console.log(data)
   setPolls(data)
    }
    fetchPolls();
  },[])
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
      },
      headerRight:() =>  <Link href={"/polls/new"}> <AntDesign name='plus' size={20} color="black" /> </Link>,
      headerLeft:() =>  <Link href={"/profile"}> <AntDesign name='user' size={20} color="black" /> </Link>
      // headerRight:() =>  <AntDesign  onPress={()=>router.push("/polls/new")} />
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
