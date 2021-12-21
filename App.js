import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import { AppRegistry } from "react-native";
import { UserProvider } from "./src/context/userContext";
import DashBoardScreen from "./src/screens/DashBoardScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

AppRegistry.registerComponent("MyApp", () => App);
