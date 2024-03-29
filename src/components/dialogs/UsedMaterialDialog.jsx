import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Reapple from "react-native-material-ripple";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";

export function UsedMaterialDialog({
  edit = false,
  insertMaterial,
  pushMaterial,
  modalDialog,
  handleModalDialog,
  handleRemoveMaterial,
}) {
  const [material, setMaterial] = useState(
    insertMaterial
      ? insertMaterial
      : {
          name: "",
          amount: "0",
        }
  );

  useEffect(() => {
    setMaterial(insertMaterial);
  }, [insertMaterial, edit]);

  function addMaterial() {
    let amount = parseInt(material.amount);
    amount = amount + 1;
    setMaterial({ ...material, amount: amount.toString() });
  }

  function removeMaterial() {
    let amount = parseInt(material.amount);
    if (amount > 0) {
      amount = amount - 1;
    }

    setMaterial({ ...material, amount: amount.toString() });
  }

  function handleAddMaterial() {
    if (parseInt(material.amount) > 0) {
      pushMaterial(material);
      return;
    }

    console.warn("quantidade de materiais deve ser maior que 1");
  }
  function handleRemoveButton(id) {
    handleRemoveMaterial(id);
  }
  return (
    <View style={modalDialog ? styles.dialog : styles.dialogClosed}>
      <View>
        <View style={styles.dialogCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderTextContent}>
              <Text style={styles.cardHeaderText}>Inserir materiais</Text>
              <Text style={styles.cardHeaderSubtitle}>
                Digite a quantidade de material utilizado para finalizar esta OS
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

          <View>
            <Text style={styles.materialName}>{material.name}</Text>
            <View style={styles.inputInserMaterialContent}>
              <View>
                <Reapple
                  style={styles.cardIcon}
                  onPress={() => removeMaterial()}
                >
                  <Icon size={36} name={"remove"} color="#000" />
                </Reapple>
              </View>

              <TextInput
                style={styles.materialInput}
                onChangeText={(text) =>
                  setMaterial({ ...material, amount: text.trim() })
                }
                value={material.amount}
                keyboardType="numeric"
              />

              <View>
                <Reapple style={styles.cardIcon} onPress={() => addMaterial()}>
                  <Icon size={36} name={"add"} color="#000" />
                </Reapple>
              </View>
            </View>
          </View>

          <View style={styles.actionButton}>
            <PrimaryButton onPress={() => handleAddMaterial()}>
              Adicionar
            </PrimaryButton>

            {edit && (
              <SecondaryButton onPress={() => handleRemoveButton(material.id)}>
                Remover
              </SecondaryButton>
            )}
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
  inputInserMaterialContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 12,
  },
  materialName: {
    fontSize: 18,
    fontWeight: "500",
  },
  materialInput: {
    flex: 1,

    borderWidth: 1,
    borderColor: "#BBB",
    borderRadius: 8,

    width: 40,
    height: 42,
    marginHorizontal: 12,

    fontSize: 20,
    textAlign: "center",
  },
  actionButton: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 16,
  },
});
