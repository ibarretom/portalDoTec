import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function TwoColumnWithHeadersTable({ data = [], keys = [] }) {
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
        {data && data.map((d, i, array) =>
          i !== array.length ? <View style={styles.row} key={i}>
            <Text style={styles.data} >{d[keys[0]]}</Text>
            <Text style={styles.lastData}>{d[keys[1]]}</Text>
          </View> :
            <View style={styles.lastRow} key={i}>
              <Text style={styles.data}>{d[keys[0]]}</Text>
              <Text style={styles.lastData}>{d[keys[1]]}</Text>
            </View>
        )}

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
