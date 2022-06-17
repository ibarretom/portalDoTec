import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../components/buttons/PrimaryButton";

const avatar1 = require("../assets/images/avatarBlack.png");
const avatar2 = require("../assets/images/avatarSheik.png");
const avatar3 = require("../assets/images/avatarTec.png");

export function EnterLoginPage({ navigation }) {
  function goToLoginPage(){
    navigation.navigate("LoginPage");
  }
  return (
    <LinearGradient colors={["#FF3A89", "#FE8161"]} style={styles.main}>
      <View style={[styles.imageLine, , { paddingTop: 18 }]}>
        <View
          style={[
            styles.imageContainerMd,
            { transform: [{ rotate: "21.88deg" }] },
          ]}
        >
          <Image style={styles.image} source={avatar1} />
        </View>
      </View>
      <View style={[styles.imageLine, { flex: 1, alignItems: "flex-end" }]}>
        <View
          style={[
            styles.imageContainerMd,
            { transform: [{ rotate: "-27.47deg" }] },
          ]}
        >
          <Image style={styles.image} source={avatar2} />
        </View>
      </View>
      <View style={styles.imageLine}>
        <View
          style={[
            styles.imageContainerLG,
            { transform: [{ rotate: "6.28deg" }] },
          ]}
        >
          <Image style={styles.image} source={avatar3} />
        </View>
      </View>
      <View>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Vamos lá!!</Text>
          <Text style={styles.welcomeTextDown}>
            Aqui você tem as ferramentas para administrar os serviços do dia a
            dia
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={() => goToLoginPage()}
            size={"md"}
            text={"Entrar"}
            color={"#000"}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginTop: 16,
    paddingBottom: 16
  },
  welcomeTextContainer: {
    paddingTop: 48,
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  welcomeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  welcomeTextDown: {
    color: "white",
    fontWeight: "400",
    fontSize: 14,
    paddingRight: 40,
  },
  imageContainerMd: {
    width: 120,
    height: 120,
    backgroundColor: "#F7BB0A",
    elevation: 2,
    borderRadius: 14,
  },
  imageContainerLG: {
    width: 190,
    height: 190,
    backgroundColor: "#F7BB0A",
    elevation: 2,
    borderRadius: 14,
  },
  imageLine: {
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
