import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Reapple from "react-native-material-ripple";

export function TwoColumnTable({ data = [], keys = [], onPressRow }) {
  function handlePressRow(data) {
    onPressRow(data);
  }
  return (
    <View style={styles.table}>
      <View style={styles.body}>
        {data.map((data, i, dataArr) => {
          if (i + 1 !== dataArr.length) {
            return (
              <Reapple
                style={styles.row}
                key={i}
                onPress={() => handlePressRow(data)}
              >
                <Text style={styles.data}>{data[keys[0]]}</Text>
                <Text style={styles.lastData}>{data[keys[1]]}</Text>
              </Reapple>
            );
          }
          return (
            <Reapple
              style={styles.lastRow}
              key={i}
              onPress={() => handlePressRow(data)}
            >
              <Text style={styles.data}>{data[keys[0]]}</Text>
              <Text style={styles.lastData}>{data[keys[1]]}</Text>
            </Reapple>
          );
        })}
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
    flex: 6,
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
