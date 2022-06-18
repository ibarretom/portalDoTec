import React from "react";
import { StyleSheet, View } from "react-native";

import Reapple from "react-native-material-ripple";
import Icon from "react-native-vector-icons/MaterialIcons";

export function TabBar({ onClickBack }) {
  return (
    <View style={styles.tabBar}>
      <Reapple onPress={onClickBack}>
        <Icon size={24} name={"arrow-back"} color="#000" />
      </Reapple>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 52,
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
    backgroundColor: "white",
  },
});
