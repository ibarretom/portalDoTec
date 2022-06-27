import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { TextGradient } from "../components/TextGradient";
import { HomeButton } from "../components/HomeButton";
import { OSCard } from "../components/OSCard";

import { db, ref, onValue } from "../plugins/firebase";

export function HomePage({ navigation }) {
  const [OSList, setOSList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [filterOS, setFilterOS] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, "ordensDeServico");
    onValue(dataRef, (snapshot) => {
      const dataArray = objectToArray(snapshot.val());
      setOSList(dataArray);
    });
  }, []);

  useEffect(() => {
    const filterList = OSList.filter(({ numeroOS }) =>
      numeroOS.includes(filterOS)
    );
    setFilteredList(filterList);
  }, [filterOS]);
  function goTo({ page }) {
    navigation.navigate(page);
  }

  function objectToArray(object) {
    const array = [];
    for (let key in object) {
      array.push({ id: key, ...object[key] });
    }
    return array;
  }

  return (
    <ScrollView style={styles.main}>
      <TextGradient text={"Bem-vindo ao Portal do Técnico"} />
      <View style={styles.buttonsContainer}>
        <HomeButton
          name={"Finalizar OS"}
          iconName={"description"}
          onPress={() => goTo({ page: "FinalizarOSPage" })}
        />
        <HomeButton
          name={"Relatório de Materiais"}
          iconName={"assignment"}
          onPress={() => goTo({ page: "ReportPage" })}
        />
      </View>
      <Text style={styles.OSText}>OS's finalizadas</Text>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder={"Pesquisar OS"}
          onChangeText={(text) => setFilterOS(text)}
          value={filterOS}
        />
        <Icon
          size={32}
          name={"search"}
          color={"#D6D6D6"}
          style={styles.inputSearchIcon}
        />
      </View>
      {filteredList.length > 0
        ? filteredList.map((OS, i) => {
            return <OSCard OSData={OS} key={i} />;
          })
        : OSList.map((OS, i) => {
            return <OSCard OSData={OS} key={i} />;
          })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: "#fff",
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
