import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { Checkbox } from "react-native-paper";

import { PrimaryButton } from "../components/buttons/PrimaryButton";
import { SecondaryButton } from "../components/buttons/SecondaryButton";
import { TabBar } from "../components/TabBar";
import { TwoColumnTable } from "../components/TwoColumnTable";

export function FinalizarOSPage({ navigation }) {
  function goToHomePage() {
    navigation.navigate("HomePage");
  }
  return (
    <>
      <TabBar onClickBack={() => goToHomePage()} />
      <ScrollView style={styles.main}>
        <Text style={styles.finalizarOS}>Finalizar OS</Text>

        <View style={styles.rowInput}>
          <View style={styles.inputColumn}>
            <Text style={styles.inputLabel}>Numero da OS</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={[styles.inputColumn, { marginLeft: 8 }]}>
            <Text style={styles.inputLabel}>Numero da conta</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <View style={[styles.rowInput, { marginTop: 16 }]}>
          <View style={styles.inputColumn}>
            <Text style={styles.inputLabel}>Kilometragem</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputColumn}></View>
        </View>

        <View style={styles.checkGroup}>
          <View style={styles.checkboxField}>
            <Checkbox status={"checked"} color="#1976D2" />
            <Text style={styles.checkboxLabel}>Habilitou IRD?</Text>
            <Text style={styles.checkboxValue}>Sim</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>Número IRD</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <View style={styles.checkGroup}>
          <View style={styles.checkboxField}>
            <Checkbox status={"checked"} color="#1976D2" />
            <Text style={styles.checkboxLabel}>Retirou IRD?</Text>
            <Text style={styles.checkboxValue}>Sim</Text>
          </View>
          <View>
            <Text style={styles.inputLabel}>Número IRD</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <View styles={styles.textAreaGroup}>
          <Text style={styles.inputLabel}>Observação</Text>
          <TextInput
            multiline
            numberOfLines={5}
            maxLength={259}
            style={styles.textArea}
          />
        </View>

        <View style={[styles.rowInput, { marginVertical: 16 }]}>
          <View style={[styles.inputColumn, { marginRight: 8 }]}>
            <TextInput
              style={styles.input}
              placeholder={"Pesquisar Material"}
            />
          </View>
          <PrimaryButton text={"Inserir"} />
        </View>

        <TwoColumnTable />

        <View>
          <PrimaryButton text={"Finalizar"} size="md" mb={8} />

          <SecondaryButton text={"Cancelar"} size="md" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  finalizarOS: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginTop: 16,
    marginBottom: 16,
  },
  rowInput: {
    flexDirection: "row",
  },
  inputColumn: {
    flex: 1,
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderColor: "#D6D6D6",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
  inputLabel: {
    marginBottom: 4,
    fontWeight: "500",
  },
  checkGroup: {
    marginVertical: 8,
  },
  checkboxField: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  checkboxLabel: {
    fontWeight: "500",
  },
  checkboxValue: {
    marginLeft: 4,
  },
  textAreaGroup: {
    marginVertical: 8,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: "white",
  },
});
