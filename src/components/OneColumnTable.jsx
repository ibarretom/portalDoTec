import { StyleSheet, Text, View } from "react-native";

import Reapple from "react-native-material-ripple";

export function OneColumnTable({ title, data = [], keys, onPressRow }) {
  return (
    <View style={styles.table}>
      <View style={styles.header}>
        <View style={styles.th}>
          <Text style={[styles.data, { fontWeight: "600" }]}>{title}</Text>
        </View>
      </View>
      <View style={styles.body}>
        {data.map((data, i) => {
          return (
            <Reapple style={styles.row} key={i} onPress={() => onPressRow(data)}>
              <Text style={styles.data}>{data[keys[0]]}</Text>
            </Reapple>
          );
        })}
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
