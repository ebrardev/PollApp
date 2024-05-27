import {  Stack, useLocalSearchParams } from "expo-router";
import { View,Text, StyleSheet,Pressable,Button} from "react-native";
import {Feather} from "@expo/vector-icons"
import { useState } from "react";

const poll ={
    question:"react native vs Flutter",
    options:["react native","expo","swift","flutter"]
}

   export default function PollDetails() {
    const {id} = useLocalSearchParams<{id:string}>()

        const [selected,setSelected] = useState("react native")
        const vote=() =>{
            console.warn("Vote:", selected)
        }


    return(
        <View style={styles.container}> 

        <Stack.Screen options={{
                title:"Poll Voting",
                headerStyle:{
                  backgroundColor:"#02e0c6"
                },
                headerTintColor:"black",
                headerTitleStyle:{
                  fontWeight:"bold"
                }
        }} />
            <Text  style={styles.question}  > {poll.question} </Text>


       <View style={{gap:5}}>
            {poll.options.map(option=>(
                <Pressable   onPress={()=>setSelected(option)}
                    
                    key={option} style={styles.optionContainer}>
                    <Feather name={option ===selected ? "check-circle" : "circle"} size={20} 
                    
                    color={option=== selected? "green": "gray"}
                    
                    />
                    <Text>{option}</Text>
                    </Pressable>
            ))}
        </View>
        <Button onPress={vote} title ="Vote" />
        
        </View>
    )
   }

const styles =  StyleSheet.create({
    container:{
        padding:10,
        gap:20,
     
    },
    question:{
        fontSize:20,
        fontWeight:"600",
     
   
    },
    optionContainer:{
        backgroundColor:"white",
        padding:10,
        borderRadius:5,
        flexDirection:"row",
        gap:10
    }
    

})