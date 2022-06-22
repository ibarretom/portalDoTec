import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Input } from "../Input";

const minimumLength = 6;

export function LoginForm({ onPressEnter }) {
  const [user, setUser] = useState({ email: "", password: "" });

  function handleUserLogIn() {
    if (user.email.trim() === "") return;
    if (!user.email.includes("@")) return;
    if (user.password.trim() === "") return;
    if (user.password.length < minimumLength) return;

    onPressEnter(user);
  }
  return (
    <TouchableWithoutFeedback>
      <KeyboardAvoidingView behavior="position" enable>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Input
            onChangeText={(email) => setUser({ ...user, email })}
            value={user.email}
            placeholder="Digite o email"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <Input
            onChangeText={(password) => setUser({ ...user, password })}
            value={user.password}
            placeholder="Digite a senha"
            secureTextEntry
          />
        </View>
        <PrimaryButton size="md" onPress={handleUserLogIn}>
          Entrar
        </PrimaryButton>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
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
