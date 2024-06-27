import {  Stack, useLocalSearchParams } from "expo-router";
import { View,Text, StyleSheet,Pressable,Button, ActivityIndicator, Alert} from "react-native";
import {Feather} from "@expo/vector-icons"
import { useEffect, useState } from "react";
import { Poll,Vote } from "../../types/db";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../providers/AuthProvider";


   export default function PollDetails() {
    const {id} = useLocalSearchParams<{id:string}>()
    const [poll,setPoll] = useState<Poll>(null)
    const [userVote,setUserVote] = useState<Vote>(null)

        const [selected,setSelected] = useState("")
        const {user} = useAuth()
        useEffect(()=>{
            const fetchPolls= async () =>{
        
           let {data,error} = await supabase.from("polls").select("*").eq("id",Number.parseInt(id)).single()
           if(error) {
            Alert.alert("error fatching data")
           }
           console.log(data)
           setPoll(data)
     
            }
            const fetchUserVote = async() =>{
                let {data,error} = await supabase.from("votes").select("*").eq("poll_id",Number.parseInt(id))
                .eq("user_id",user.id)
                .single()
           if(error) {
            Alert.alert("error fatching data")
           }
           console.log(data)
           setPoll(data)
     
            }
            fetchPolls();
          },[])
        const vote= async() =>{
            console.warn("Vote:", selected)
            const {data,error} = await supabase
            .from("votes")
            .insert([{option:selected,poll_id:poll.id,user_id:user.id}])
            .select()
            if(error) {
                Alert.alert("failed to vote")
            } else {
                Alert.alert("thanks for your vote")
            }
        }

        if(!poll) {
            return <ActivityIndicator/>
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