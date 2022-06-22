import React from "react";
import { StyleSheet, TextInput } from "react-native";

export function Input({ ...rest }) {
  return <TextInput style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "white",
    borderColor: "#D6D6D6",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
});
