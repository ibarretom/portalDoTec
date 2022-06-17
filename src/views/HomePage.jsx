import React from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { TextGradient } from "../components/TextGradient";
import { HomeButton } from "../components/HomeButton";
import { OSCard } from "../components/OSCard";

export function HomePage() {
  return (
    <ScrollView style={styles.main}>
      <TextGradient text={"Bem-vindo ao Portal do Técnico"}/>
      <View style={styles.buttonsContainer}>
        <HomeButton name={"Finalizar OS"} iconName={"description"} />
        <HomeButton name={"Relatório de Materiais"} iconName={"assignment"} />
      </View>
      <Text style={styles.OSText}>OS's finalizadas</Text>
      <View>
        <TextInput style={styles.searchInput} placeholder={"Pesquisar OS"} />
        <Icon
          style={styles.inputSearchIcon}
          name={"search"}
          size={32}
          color={"#D6D6D6"}
        />
      </View>
      <OSCard />
      <OSCard />
      <OSCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  OSText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  searchInput: {
    height: 40,
    backgroundColor: "white",
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
  inputSearchIcon: {
    position: "absolute",
    right: 8,
    top: 4,
  },
});
