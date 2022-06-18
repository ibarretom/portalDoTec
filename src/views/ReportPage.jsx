import React from "react";
import { StyleSheet, Text, TextInput, ScrollView, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { TwoColumnWithHeadersTable } from "../components/TwoColumnWithHeadersTable";
import { OneColumnTable } from "../components/OneColumnTable";


export function ReportPage() {
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.mainText}>Relatório de materiais</Text>
      
      <View>
        <TextInput style={styles.input} placeholder={"15/06/2022"} />
        <Icon style={styles.calendarIcon} size={32} name={"calendar-today"} color="#999" />
      </View>
      
      <Text style={styles.secondaryText}>Utilizados</Text>

      <TwoColumnWithHeadersTable />
      
      <OneColumnTable />
      
      <Text style={styles.secondaryText}>Retirados</Text>
      
      <OneColumnTable />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 68,
    marginBottom: 16
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderColor: "#D6D6D6",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
  calendarIcon: {
    position: "absolute",
    right: 8,
    top: 4
  },
  secondaryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16
  }
});
