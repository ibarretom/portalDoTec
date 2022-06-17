import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export function TextGradient({ text }) {
  return (
    <MaskedView
      maskElement={<Text style={styles.welcomeText}>{text}</Text>}
    >
      <LinearGradient
        colors={["#FF3A89", "#FE8161"]}
        style={styles.text}
      >
        <Text style={[styles.welcomeText, { opacity: 0 }]}>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "transparent",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 52,
  },
});
