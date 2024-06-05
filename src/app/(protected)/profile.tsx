import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { View,Text,Button } from "react-native";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../providers/AuthProvider";
import { Redirect ,Stack} from "expo-router";

export default function ProfileScreen() {
 const  {user} = useAuth()


    return (
        <>
        <Stack.Screen options={{
      
            title:"Profile",
            headerStyle:{
              backgroundColor:"#02e0c6"
            },
            headerTintColor:"black",
            headerTitleStyle:{
              fontWeight:"bold"
            },

            // headerRight:() =>  <AntDesign  onPress={()=>router.push("/polls/new")} />
            }}/>
        <View style={{padding:10}}>
            <Text>User id :  {user?.id} </Text>
            <Button title="Sign out" onPress={()=>supabase.auth.signOut()} />
        </View>
        </>
    )
}