import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";

export function ConfirmationDialog({
  modalDialog = false,
  bodyText,
  headerText,
  handleConfirmationButton,
  handleRejectButton
}) {
  const [modal, setModal] = useState(false)
  useEffect(() => {
    setModal(modalDialog)
  }, [modalDialog])
  return (
    <View style={modal ? styles.dialog : styles.dialogClosed}>
      <View>
        <View style={styles.dialogCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderTextContent}>
              <Text style={styles.cardHeaderText}>{headerText}</Text>
            </View>
          </View>

          <View style={styles.body}>
            <Text>{bodyText}</Text>
          </View>
          <View style={styles.actionButtons}>
            <PrimaryButton onPress={handleConfirmationButton}>Confirmar</PrimaryButton>
            <SecondaryButton onPress={handleRejectButton}>Rejeitar</SecondaryButton>
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
    fontSize: 20,
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
  body: {
    fontSize: 18,
  },
  actionButtons: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",

    marginTop: 24
  },
});
