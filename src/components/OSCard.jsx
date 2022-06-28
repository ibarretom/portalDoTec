import React from "react";

import { StyleSheet, View, Text } from "react-native";
import { TwoColumnTable } from "./TwoColumnTable";

import Reapple from "react-native-material-ripple";

export function OSCard({ OSData }) {
  return (
    <Reapple style={styles.mainContainer}>
      <View style={styles.headlines}>
        <View style={styles.headlinesInfo}>
          <Text style={styles.OSText}>OS: {OSData.numeroOS}</Text>
          <Text style={styles.separator}>|</Text>
          <Text>Conta: {OSData.numeroDaConta}</Text>
        </View>
        <View style={styles.bullet}></View>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Status: Encerrada</Text>
        <Text style={styles.kilometragem}>
          Kilometragem: {OSData.kilometragem} Km
        </Text>
      </View>
      <View>
        {OSData.IRDsHabilitados && (
          <Text style={styles.margin8}>
            <Text style={styles.strong}>IRDS`s habilitados:</Text>
            {OSData.IRDsHabilitados.map((ird) => ird.name)}
          </Text>
        )}
        {OSData.IRDsRetirados && (
          <Text style={styles.margin8}>
            <Text style={styles.strong}>IRDS`s habilitados:</Text>
            {OSData.IRDsRetirados.map((ird) => ird.name)}
          </Text>
        )}
        <Text style={styles.margin8}>
          <Text style={styles.strong}>Observação: </Text>
          {OSData.observacao}
        </Text>
      </View>
      <View>
        <Text style={{fontWeight: "bold"}}>Materiais</Text>
        <TwoColumnTable data={OSData.materiais} keys={["name","amount"]} onPressRow={() => {}} />
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
    minHeight: 320,
  },
  headlines: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headlinesInfo: {
    flexDirection: "row",
    alignItems: "center"
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
    fontSize: 12,
  },
  kilometragem: {
    marginLeft: 12,
    fontSize: 12,
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
