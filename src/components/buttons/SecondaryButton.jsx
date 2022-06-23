import React from "react";
import { Text, StyleSheet } from "react-native";
import Reapple from "react-native-material-ripple"

export function SecondaryButton({ children, size = "sm", mb = 8 }) {
  return (
    <Reapple
      style={[
        size == "md" ? styles.buttonMd : styles.buttonSm,
        { marginBottom: mb },
      ]}
    >
      <Text style={size == "md" ? styles.md : styles.sm}>{children}</Text>
    </Reapple>
  );
}

const styles = StyleSheet.create({
  buttonMd: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderColor: "#FF5252",
    borderWidth: 1,
  },
  buttonSm: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderColor: "#FF5252",
    borderWidth: 1,
  },
  md: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FF5252",
  },
  sm: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FF5252",
  },
});
