import React from "react";

import { StyleSheet, View, Text } from "react-native";
import { TwoColumnTable } from "./TwoColumnTable";

import Reapple from "react-native-material-ripple";

export function OSCard() {
  return (
    <Reapple style={styles.mainContainer}>
      <View style={styles.headlines}>
        <View style={styles.headlinesInfo}>
          <Text style={styles.OSText}>OS: 12345654</Text>
          <Text style={styles.separator}>|</Text>
          <Text>Conta: 1234124234</Text>
        </View>
        <View style={styles.bullet}></View>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Status: Encerrada</Text>
        <Text style={styles.kilometragem}>Kilometragem: 12 Km</Text>
      </View>
      <View>
        <Text style={styles.margin8}>
          <Text style={styles.strong}>IRDS`s habilitados:</Text>{" "}
          CE0A203687546590987D
        </Text>
        <Text style={styles.margin8}>
          <Text style={styles.strong}>IRDS`s Retirados:</Text>{" "}
          CE0A203687546590987D
        </Text>
        <Text style={styles.margin8}>
          <Text style={styles.strong}>Observação: </Text> Serviço finalizado,
          cliente satisfeito. equipamentos funcionando
        </Text>
      </View>
      <View>
        <Text>Materiais</Text>
        <TwoColumnTable />
      </View>
    </Reapple>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 12,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    marginTop: 16,
    minHeight: 320
  },
  headlines: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headlinesInfo: {
    flexDirection: "row",
  },
  OSText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    marginLeft: 8,
    marginRight: 8,
  },
  contaText: {
    fontSize: 14,
  },
  status: {
    flexDirection: "row",
  },
  statusText: {
    fontSize: 12
  },
  kilometragem: {
    marginLeft: 12,
    fontSize: 12
  },
  strong: {
    fontWeight: "bold",
  },
  margin8: {
    marginTop: 8,
  },
  bullet: {
    width: 12,
    height: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 6,
  },
});
