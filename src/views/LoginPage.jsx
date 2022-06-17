import React from "react";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import Reapple from "react-native-material-ripple";

import { InputComponent } from "../components/InputComponent";
import { PrimaryButton } from "../components/buttons/PrimaryButton";

export function LoginPage({ navigation }) {
  function goToEnterLogin() {
    navigation.navigate("EnterLoginPage");
  }

  function goToHomePage() {
    navigation.navigate("HomePage")
  }

  return (
    <>
      <View style={styles.tabBar}>
        <Reapple onPress={() => goToEnterLogin()}>
          <Icon size={24} name={"arrow-back"} color="#000" />
        </Reapple>
      </View>
      <View style={styles.main}>
        <Text style={styles.welcomeText}>Olá, seja bem-vindo!</Text>
        <Text style={styles.instructionText}>
          Utilize o login e senha forncecidos pelo seu gerente para utilizar o
          portal
        </Text>
        <View style={styles.inputContainer}>
          <InputComponent label={"Login"} placeholder={"Digite o login"} />
          <InputComponent label={"Senha"} placeholder={"Insira a senha"} />
          <PrimaryButton text="Entrar" styles={styles.button} size={"md"} onPress={goToHomePage} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 52,
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
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
  button: {
    borderRadius: 16,
  },
});
