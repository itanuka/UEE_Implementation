import { View, Platform, StatusBar } from "react-native";
import Sign from "./screens/Sign";
import SignUp from "./screens/SignUp";
import UpdateUser from "./screens/UpdateUser";
import UserDetails from "./screens/UserDetails";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign in" component={Sign} />
          <Stack.Screen name="Sign up" component={SignUp} />
          <Stack.Screen name="Update User" component={UpdateUser} />
          <Stack.Screen name="User Details" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
