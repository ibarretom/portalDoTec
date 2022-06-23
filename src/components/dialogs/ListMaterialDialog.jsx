import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Reapple from "react-native-material-ripple";

const materials = [
  {
    id: "1",
    name: "Cabo coaxial F-59",
    amount: "0",
    unit: "m",
  },
  {
    id: "2",
    name: "Conector F-59",
    amount: "0",
    unit: "un",
  },
  { id: "3", name: "Conector RG-6", amount: "0", unit: "un" },
  {
    id: "4",
    name: "Chave 3x4",
    amount: "0",
    unit: "un",
  },
  {
    id: "5",
    name: "Lnbf Duplo",
    amount: "0",
    unit: "un",
  },
  {
    id: "6",
    name: "Lnbf Simples",
    amount: "0",
    unit: "un",
  },
  { id: "7", name: "Amplificador tronco", amount: "0", unit: "un" },
].sort((a, b) => a.name > b.name);

export function ListMaterialDialog({
  pushMaterial,
  modalDialog = false,
  handleModalDialog,
}) {
  function handleSelectItem(item) {
    pushMaterial && pushMaterial(item);
  }

  function renderItem({ item }) {
    return (
      <Reapple style={styles.listItem} onPress={() => handleSelectItem(item)}>
        <Text style={styles.listItemText}>{item["name"]}</Text>
      </Reapple>
    );
  }

  return (
    <View style={modalDialog ? styles.dialog : styles.dialogClosed}>
      <View>
        <View style={styles.dialogCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderTextContent}>
              <Text style={styles.cardHeaderText}>Inserir materiais</Text>
              <Text style={styles.cardHeaderSubtitle}>
                Selecione o material utilizado para finalizar esta OS
              </Text>
            </View>

            <View>
              <Reapple
                style={styles.cardIcon}
                onPress={() => handleModalDialog(false)}
              >
                <Icon size={36} name={"close"} color="#000" />
              </Reapple>
            </View>
          </View>

          <View style={styles.listContent}>
            <FlatList
              data={materials}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dialog: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    zIndex: 2,

    opacity: 0.9,
    backgroundColor: "black",
  },
  dialogClosed: {
    display: "none",
  },
  dialogCard: {
    backgroundColor: "white",
    padding: 16,
    width: 330,
    borderRadius: 16,
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
  },
  cardHeaderTextContent: {
    flex: 1,
    marginBottom: 20,
  },
  cardHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardIcon: {
    backgroundColor: "#F2F2F2",
    padding: 2,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  listContent: {
    maxHeight: 320,
  },
  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginVertical: 3,
  },
});
