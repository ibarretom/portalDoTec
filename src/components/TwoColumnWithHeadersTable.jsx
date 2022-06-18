import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function TwoColumnWithHeadersTable({data}) {
  return (
    <View style={styles.table}>
      <View style={styles.header}>
        <View style={styles.th}>
          <Text style={[styles.data, { fontWeight: "600" }]}>Materiais</Text>
          <Text style={[styles.lastData, { fontWeight: "600" }]}>
            Quantidade
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.data}>Cabo coaxial F-59</Text>
          <Text style={styles.lastData}>200 m</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.data}>Conector F-59</Text>
          <Text style={styles.lastData}>2 un</Text>
        </View>
        <View style={styles.lastRow}>
          <Text style={styles.data}>Chave 3x4</Text>
          <Text style={styles.lastData}>2 un</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    // padding: 12,
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#D6D6D6",
    marginTop: 16
  },
  th: {
    flexDirection: "row",
    borderBottomColor: "#D6D6D6",
    borderBottomWidth: 1,
  },
  data: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8,
  },
  lastData: {
    flex: 1,
    textAlign: "right",
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8,
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "#D6D6D6",
    borderBottomWidth: 1,
  },
  lastRow: {
    flexDirection: "row",
  },
});
