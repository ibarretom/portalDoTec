import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EnterLoginPage } from "../views/EnterLoginPage";
import { LoginPage } from "../views/LoginPage";
import { HomePage } from "../views/HomePage";
import { FinalizarOSPage } from "../views/FinalizarOSPage";
import { ReportPage } from "../views/ReportPage";

import { useAuth } from "../hooks/useAuth";
import { ListOS } from "../views/ListOS";

const Stack = createNativeStackNavigator();

export function Router() {
  const { isLogIn } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animation: "none", headerShown: false }}
      >
        {!isLogIn ? (
          <>
            <Stack.Screen name="EnterLoginPage" component={EnterLoginPage} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="FinalizarOSPage" component={FinalizarOSPage} />
            <Stack.Screen name="ReportPage" component={ReportPage} />
            <Stack.Screen name="ListOS" component={ListOS} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
