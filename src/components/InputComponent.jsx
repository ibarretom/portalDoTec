import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function InputComponent({
  label,
  placeholder,
  ste = false,
  onChangeText,
}) {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={ste}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  label: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderColor: "#D6D6D6",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
});
