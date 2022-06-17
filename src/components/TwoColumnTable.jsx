import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function TwoColumnTable() {
  return (
    <View style={styles.table}>
      {/* <View style={styles.header}>
        <View style={styles.th}>
          <Text style={styles.data}>Materiais</Text>
          <Text style={styles.lastData}>Quantidade</Text>
        </View>
      </View> */}
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
  },
  th: {
    flexDirection: "row",
  },
  data: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 8
  },
  lastData: {
    flex: 1,
    textAlign: "right",
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 8
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "#D6D6D6",
    borderBottomWidth: 1,
  },
  lastRow: {
    flexDirection: "row",
  }
});
