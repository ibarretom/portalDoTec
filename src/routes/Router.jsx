import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EnterLoginPage } from "../views/EnterLoginPage";
import { LoginPage } from "../views/LoginPage";
import { HomePage } from "../views/HomePage";

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animation: "none", headerShown: false }}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
        {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
