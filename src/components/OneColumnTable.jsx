import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function OneColumnTable() {
  return (
    <View style={styles.table}>
      <View style={styles.header}>
        <View style={styles.th}>
          <Text style={[styles.data, { fontWeight: "600" }]}>IRD</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.data}>Cabo coaxial F-59</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: 12,
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#D6D6D6",
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
