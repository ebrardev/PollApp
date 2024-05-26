import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { View,Text} from "react-native";
import { Link } from "expo-router";


   export default function PollDetails() {
    const {id} = useLocalSearchParams<{id:string}>()



    return(
        <View>
            <Text> Poll details. {id} </Text>
            <Link href= {`/polls/${Number.parseFloat(id)+1}`}> Go next</Link>
        </View>
    )
   }