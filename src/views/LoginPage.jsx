import { useState } from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

import { TabBar } from "../components/TabBar";

import { useAuth } from "../hooks/useAuth";
import { LoginForm } from "../components/form/LoginForm";

export function LoginPage({ navigation }) {
  const {signIn} = useAuth()

  function goToEnterLogin() {
    navigation.goBack();
  }

  function doLogIn({email, password}) {
    console.warn(email, password)
    signIn({email, password})
  }

  return (
    <>
      <TabBar onClickBack={() => goToEnterLogin()} />
      <View style={styles.main}>
        <Text style={styles.welcomeText}>Olá, seja bem-vindo!</Text>
        <Text style={styles.instructionText}>
          Utilize o login e senha forncecidos pelo seu gerente para utilizar o
          portal
        </Text>
        <View style={styles.inputContainer}>
          <LoginForm onPressEnter={doLogIn}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  instructionText: {
    paddingRight: 32,
  },
  inputContainer: {
    width: "100%",
    marginTop: 24,
  },
});
