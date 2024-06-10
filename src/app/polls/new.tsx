import { Redirect, Stack, router } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../providers/AuthProvider";
import { supabase } from "../../lib/supabase";

export default function CreatePoll() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);
    const [error,setError] = useState("")

    const {user} = useAuth()

    const createPoll =  async() => {
        setError("")
        if(!question) {
        setError("please provide the question")
        return
        }
        const validOptions = options.filter(o=> !!o)
        if (validOptions.length <2) {
            setError("please provide  at least 2  valid options")
        }
        const  {data,error} = await supabase
        .from("polls")
        .insert([{question,options:validOptions}])
        .select()
        if(error) {
            Alert.alert("Failed to create poll")
            console.log(error)
            return;
        }
        router.back()
         console.warn("created poll")
    };


    if(!user ) {
        return <Redirect href="/login" />
    }
    return (
        <View style={styles.container}>
            <Stack.Screen 
                options={{
                    title: "Create poll",
                    headerStyle: {
                        backgroundColor: "#02e0c6",
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            />
            <Text style={styles.label}>Title</Text>
            <TextInput 
                value={question} 
                onChangeText={setQuestion} 
                placeholder="Type your question" 
                style={styles.input} 
            />

            <Text style={styles.label}>Options</Text>
            {options.map((option, index) => (
                <View key={index} style={{ justifyContent: "center" }}>
                    <TextInput
                        onChangeText={(text) => {
                            const updated = [...options];
                            updated[index] = text;
                            setOptions(updated);
                        }}
                        value={option}
                        placeholder={`Option ${index + 1}`}
                        style={styles.input}
                    />
                    <Feather
                        name="x"
                        size={18}
                        color="gray"
                        style={{ position: "absolute", right: 10 }}
                        onPress={() => {
                            const updated = [...options];
                            updated.splice(index, 1);
                            setOptions(updated);
                        }}
                    />
                </View>
            ))}
            <Button title="Add option" onPress={() => setOptions([...options, ""])} />
            <Button title="Create poll" onPress={createPoll} />
            <Text style={{color:"crimson"}}>{error}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 5,
    },
    label: {
        marginTop: 10,
        fontWeight: "500",
    },
    input: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
    },
});
