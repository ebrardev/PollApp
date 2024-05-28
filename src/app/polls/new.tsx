import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function CreatePoll() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);

    const createPoll = () => {
        console.warn("created poll");
    };

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