import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"

export function HomeButton({name, iconName}) {
  return (
    <View style={styles.container}>
      <Icon size={42} name={iconName} color="#999" />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
    height: 120,
    padding: 8,
    paddingVertical: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    marginRight: 8,
  },
  icon: {
    width: 42,
    height: 42,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
});
