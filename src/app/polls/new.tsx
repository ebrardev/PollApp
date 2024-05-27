import { Stack } from "expo-router";
import { View ,Text,StyleSheet} from "react-native";

export default function createPoll() {
    return(
        <View style={styles.container}>
            <Stack.Screen options={{
              title:"Create poll",
              headerStyle:{
                backgroundColor:"#02e0c6"
              },
              headerTintColor:"black",
              headerTitleStyle:{
                fontWeight:"bold"
              }
            }}
            />
            <Text>New poll</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        
    }

})