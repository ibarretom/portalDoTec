import React from "react";
import { Text, StyleSheet } from "react-native";
import Reapple from "react-native-material-ripple";

export function PrimaryButton({
  children,
  size = "sm",
  mb = 8,
  color = "#1976D2",
  onPress
}) {
  return (
    <Reapple
      style={[
        size == "md" ? styles.buttonMd : styles.buttonSm,
        { marginBottom: mb, backgroundColor: color },
      ]}
      onPress={onPress}
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
    borderRadius: 4,
    backgroundColor: "#1976D2",
  },
  buttonSm: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: "#1976D2",
  },
  md: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  sm: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
