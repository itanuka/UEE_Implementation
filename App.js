import {
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import LoginHome from "./screens/Login/LoginHome";
import SignUpPage from "./screens/Login/SignUpPage";
import ClientHome from "./screens/Client/ClientHome";
import UpdateUser from "./screens/Login/UpdateUser";
import AddQuestionScreen from "./screens/Question/AddQuestionScreen";
import MyQuestionListScreen from "./screens/Question/MyQuestionListScreen";
// import ViewQuestionScreen from "./screens/Question/ViewQuestionScreen";
// import UpdateQuestionScreen from "./screens/Question/UpdateQuestionScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  return (
    <View>
      <Menu
        style={{ width: 200 }}
        visible={visible}
        anchor={
          <TouchableOpacity onPress={showMenu}>
            <Image
              style={{ width: 20, height: 22 }}
              source={require("./assets/menu.png")}
            />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem
          onPress={() => {
            const auth = getAuth();
            auth.signOut().then(() => navigation.navigate("Sign In"));
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </View>
  );
}
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
          <Stack.Screen name="Ask New Question" component={AddQuestionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="My Question List" component={MyQuestionListScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="View Question" component={ViewQuestionScreen} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="Update Question" component={UpdateQuestionScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Sign Up" component={SignUpPage} />
          <Stack.Screen name="Sign In" component={LoginHome} />
          <Stack.Screen name="Update user" component={UpdateUser} />
          <Stack.Screen
            name="Client"
            component={ClientHome}
            options={{
              headerBackVisible: true,
              headerRight: () => <LogoTitle />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
