import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { useAuth } from "../hooks/useAuth";

import { Checkbox } from "react-native-paper";

import { PrimaryButton } from "../components/buttons/PrimaryButton";
import { SecondaryButton } from "../components/buttons/SecondaryButton";
import { TabBar } from "../components/TabBar";
import { TwoColumnTable } from "../components/TwoColumnTable";
import { UsedMaterialDialog } from "../components/dialogs/UsedMaterialDialog";
import { ListMaterialDialog } from "../components/dialogs/ListMaterialDialog";
import { OneColumnTable } from "../components/OneColumnTable";
import { ConfirmationDialog } from "../components/dialogs/ConfirmationDialog";
import { Alert } from "../components/alerts/Alert";
import { Scan } from "../components/Scan";
import { addDoc } from "../services/database";

import _ from "lodash";

const emptyOS = {
  id_tec: "",
  numeroOS: "",
  numeroDaConta: "",
  kilometragem: "",
  IRDsHabilitados: [],
  IRDsRetirados: [],
  observacao: "",
  materiais: [],
  data_finalizacao: new Date().toLocaleDateString(),
};

export function FinalizarOSPage({ navigation }) {
  const { user } = useAuth();

  const [modalUseMaterialDialog, setModalUseMaterialDialog] = useState(false);
  const [modalSelectMaterialDialog, setModalSelectMaterialDialog] =
    useState(false);
  const [
    modalConfimationHabilitadoDialog,
    setModalConfirmationHabilitadoDialog,
  ] = useState(false);
  const [modalConfimationRetiradoDialog, setModalConfirmationRetiradoDialog] =
    useState(false);

  const [alert, setAlert] = useState({
    modal: false,
    text: "Ocorreu um erro",
    backgroundColor: "#ff5252",
  });

  const [habilitouIRD, setHabilitouIRD] = useState("unchecked");
  const [retirouIRD, setRetirouIRD] = useState("unchecked");

  const [IRDRetirado, setIRDRetirado] = useState("");
  const [IRDHabilitado, setIRDHabilitado] = useState("");
  const [IRDTobeExcluded, setIRDTobeExcluded] = useState("");

  const [material, setMaterial] = useState({});
  const [editMaterial, setEditMaterial] = useState({});

  const [ordemDeServico, setOS] = useState(_.cloneDeep(emptyOS));

  const [isLoading, setIsLoading] = useState(false);

  function goToHomePage() {
    navigation.goBack();
  }

  function defineHabilitouIRD() {
    if (habilitouIRD === "checked") {
      setHabilitouIRD("unchecked");
      setOS({ ...ordemDeServico, IRDsHabilitados: [] });
      setIRDHabilitado("");
    } else {
      setHabilitouIRD("checked");
    }
  }

  function defineRetirouIRD() {
    if (retirouIRD === "checked") {
      setRetirouIRD("unchecked");
      setOS({ ...ordemDeServico, IRDsRetirados: [] });
      setIRDHabilitado("");
    } else {
      setRetirouIRD("checked");
    }
  }

  function insertIRDHabilitado() {
    const arrayOfIRDs = ordemDeServico.IRDsHabilitados;

    const canAdd = checkIfIRDCanBeAdd(IRDHabilitado, arrayOfIRDs);

    if (!canAdd) return;

    arrayOfIRDs.push({
      name: IRDHabilitado,
      status: "HABILITADO",
      date: Date.now(),
      id_tec: user.uid,
    });

    setOS({ ...ordemDeServico, IRDsHabilitados: arrayOfIRDs });

    setIRDHabilitado("");
  }

  function insertIRDRetirado() {
    const arrayOfIRDs = ordemDeServico.IRDsRetirados;

    const canAdd = checkIfIRDCanBeAdd(IRDRetirado, arrayOfIRDs);

    if (!canAdd) return;

    arrayOfIRDs.push({
      name: IRDRetirado,
      status: "RETIRADO",
      date: Date.now(),
      id_tec: user.uid,
    });

    setOS({ ...ordemDeServico, IRDsRetirados: arrayOfIRDs });

    setIRDRetirado("");
  }

  function checkIfIRDCanBeAdd(ird, arrayIRD) {
    const IRDAlreadyAdd = arrayIRD.filter((ird) => ird === ird)[0];
    if (IRDAlreadyAdd) {
      setAlert({
        ...alert,
        modal: true,
        text: "IRD já adicionado",
      });
      return false;
    }
    if (ird.length !== 17) {
      setAlert({
        ...alert,
        modal: true,
        text: "O IRD deve ter 17 caracteres",
      });
      return false;
    }
    return true;
  }

  function handleSelectMaterial(item) {
    setMaterial(item);
    setModalSelectMaterialDialog(false);
    setModalUseMaterialDialog(true);
  }

  function handleCloseAddMaterialDialog(status) {
    setMaterial({ id: 0, material: "", amount: "" });
    setModalUseMaterialDialog(status);
  }

  function handleCloseSelectMaterialDialog(status) {
    setMaterial({ id: 0, material: "", amount: "", unit: "" });
    setEditMaterial(false);
    setModalSelectMaterialDialog(status);
  }

  function handlePushMaterial(item) {
    let arrayDeMateriais = ordemDeServico.materiais;
    if (arrayDeMateriais.filter((mat) => mat.name === item.name)[0]) {
      arrayDeMateriais = arrayDeMateriais.map((mat) => {
        if (mat.name == item.name) {
          mat.amount = item.amount;
        }

        return mat;
      });
    } else {
      arrayDeMateriais.push(item);
    }

    setOS({ ...ordemDeServico, materiais: arrayDeMateriais });
    handleCloseSelectMaterialDialog(false);
    handleCloseAddMaterialDialog(false);
  }

  function handleEditMaterial(item) {
    setMaterial(item);
    setEditMaterial(true);
    setModalUseMaterialDialog(true);
  }

  function handleRemoveMaterial(id) {
    let arrayDeMateriais = ordemDeServico.materiais.filter(
      (mat) => mat.id !== id
    );
    setOS({ ...ordemDeServico, materiais: arrayDeMateriais });
    setEditMaterial(false);
    setModalUseMaterialDialog(false);
  }

  function openModalConfirmateDeleteIRDHabilitado(data) {
    setIRDTobeExcluded(data);
    setModalConfirmationHabilitadoDialog(true);
  }

  function handleConfirmDeleteIRDHabilitado() {
    let arrayOfIRDs = ordemDeServico.IRDsHabilitados.filter(
      (ird) => ird.name !== IRDTobeExcluded.name
    );
    setOS({ ...ordemDeServico, IRDsHabilitados: arrayOfIRDs });
    setIRDTobeExcluded("");
    setModalConfirmationHabilitadoDialog(false);
  }

  function handleRejectDeleteIRDHabilitado() {
    setIRDTobeExcluded("");
    setModalConfirmationHabilitadoDialog(false);
  }

  function openModalConfirmateDeleteIRDRetirado(data) {
    setIRDTobeExcluded(data);
    setModalConfirmationRetiradoDialog(true);
  }

  function handleConfirmDeleteIRDRetirado() {
    let arrayOfIRDs = ordemDeServico.IRDsRetirados.filter(
      (ird) => ird.name !== IRDTobeExcluded.name
    );
    setOS({ ...ordemDeServico, IRDsRetirados: arrayOfIRDs });
    setIRDTobeExcluded("");
    setModalConfirmationRetiradoDialog(false);
  }

  function handleRejectDeleteIRDRetirado() {
    setIRDTobeExcluded("");
    setModalConfirmationRetiradoDialog(false);
  }

  function alertTimout(status) {
    setAlert({
      modal: false,
      text: "Ocorreu um erro",
      backgroundColor: "#ff5252",
    });
  }

  async function submitOrdemDeServico() {
    setIsLoading(true);
    const canBeSubmited = checkIfFormIsValid();
    if (!canBeSubmited) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await addDoc({
        docName: "ordensDeServico",
        docData: { ..._.cloneDeep(ordemDeServico), id_tec: user.uid },
      });
    } catch (e) {
      console.warn("erro", e.message);
    }
    setOS(_.cloneDeep(emptyOS));
    setIsLoading(false);
    goToHomePage();
  }

  function checkIfFormIsValid() {
    if (ordemDeServico.numeroOS.trim() === "") {
      setAlert({
        ...alert,
        modal: true,
        text: "O número da OS deve ser preenchido",
      });
      return false;
    }

    if (ordemDeServico.numeroDaConta.trim() === "") {
      setAlert({
        ...alert,
        modal: true,
        text: "O número da conta deve ser preenchido",
      });
      return false;
    }

    if (ordemDeServico.kilometragem.trim() === "") {
      setAlert({
        ...alert,
        modal: true,
        text: "A kilometragem percorrida deve ser informada",
      });
      return false;
    }

    return true;
  }

  return (
    <>
      <TabBar onClickBack={() => goToHomePage()} />

      <ScrollView style={styles.main}>
        <Text style={styles.finalizarOS}>Finalizar OS</Text>

        <View style={styles.rowInput}>
          <View style={styles.inputColumn}>
            <Text style={styles.inputLabel}>Numero da OS</Text>

            <TextInput
              style={styles.input}
              onChangeText={(numeroOS) =>
                setOS({ ...ordemDeServico, numeroOS })
              }
              value={ordemDeServico.numeroOS}
              placeholder="Número da OS"
              keyboardType="numeric"
            />
          </View>

          <View style={[styles.inputColumn, { marginLeft: 8 }]}>
            <Text style={styles.inputLabel}>Numero da conta</Text>

            <TextInput
              style={styles.input}
              onChangeText={(numeroDaConta) =>
                setOS({ ...ordemDeServico, numeroDaConta })
              }
              value={ordemDeServico.numeroDaConta}
              placeholder="Número da conta"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={[styles.rowInput, { marginTop: 16 }]}>
          <View style={styles.inputColumn}>
            <Text style={styles.inputLabel}>Kilometragem</Text>

            <TextInput
              style={styles.input}
              onChangeText={(kilometragem) =>
                setOS({ ...ordemDeServico, kilometragem })
              }
              value={ordemDeServico.kilometragem}
              placeholder="Kilometragem utilizada"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputColumn}></View>
        </View>

        <View style={styles.checkGroup}>
          <View style={styles.checkboxField}>
            <Checkbox
              status={habilitouIRD}
              onPress={() => defineHabilitouIRD()}
              color="#1976D2"
            />

            <Text style={styles.checkboxLabel}>Habilitou IRD?</Text>

            <Text style={styles.checkboxValue}>
              {habilitouIRD === "checked" ? "Sim" : "Não"}
            </Text>
          </View>

          {habilitouIRD === "checked" && (
            <View style={styles.rowInput}>
              <View style={[styles.inputColumn, { marginRight: 8 }]}>
                <TextInput
                  maxLength={17}
                  style={styles.input}
                  value={IRDHabilitado}
                  placeholder="Número do IRD"
                  autoCapitalize="characters"
                  onChangeText={(text) => setIRDHabilitado(text)}
                />
              </View>
              <PrimaryButton onPress={() => insertIRDHabilitado()}>
                Inserir
              </PrimaryButton>
            </View>
          )}
        </View>

        <View style={styles.checkGroup}>
          <View style={styles.checkboxField}>
            <Checkbox
              status={retirouIRD}
              onPress={() => defineRetirouIRD()}
              color="#1976D2"
            />

            <Text style={styles.checkboxLabel}>Retirou IRD?</Text>
            <Text style={styles.checkboxValue}>
              {retirouIRD === "checked" ? "Sim" : "Não"}
            </Text>
          </View>
          {retirouIRD === "checked" && (
            <View>
              <Text style={styles.inputLabel}>Número IRD</Text>
              <View style={styles.rowInput}>
                <View style={[styles.inputColumn, { marginRight: 8 }]}>
                  <TextInput
                    maxLength={17}
                    value={IRDRetirado}
                    style={styles.input}
                    placeholder="Número do IRD"
                    autoCapitalize="characters"
                    onChangeText={(text) => setIRDRetirado(text)}
                  />
                </View>

                <PrimaryButton onPress={() => insertIRDRetirado()}>
                  Inserir
                </PrimaryButton>
              </View>
            </View>
          )}
        </View>

        <View styles={styles.textAreaGroup}>
          <Text style={styles.inputLabel}>Observação</Text>
          <TextInput
            multiline
            maxLength={259}
            numberOfLines={5}
            style={styles.textArea}
            placeholder="Observação"
            value={ordemDeServico.observacao}
            onChangeText={(observacao) =>
              setOS({ ...ordemDeServico, observacao })
            }
          />
        </View>

        <View style={[{ marginVertical: 16 }]}>
          <PrimaryButton
            size="md"
            color="#4CAF50"
            onPress={() => setModalSelectMaterialDialog(true)}
          >
            Adicionar material
          </PrimaryButton>
          <TwoColumnTable
            keys={["name", "amount"]}
            data={ordemDeServico.materiais}
            onPressRow={(item) => handleEditMaterial(item)}
          />
        </View>
        <View style={[{ marginVertical: 4 }]}>
          {ordemDeServico.IRDsHabilitados.length > 0 && (
            <OneColumnTable
              keys={["name"]}
              title={"IRD Habilitado"}
              data={ordemDeServico.IRDsHabilitados}
              onPressRow={(data) =>
                openModalConfirmateDeleteIRDHabilitado(data)
              }
            />
          )}
        </View>
        <View style={[{ marginVertical: 4 }]}>
          {ordemDeServico.IRDsRetirados.length > 0 && (
            <OneColumnTable
              keys={["name"]}
              title={"IRD Retirado"}
              data={ordemDeServico.IRDsRetirados}
              onPressRow={(data) => openModalConfirmateDeleteIRDRetirado(data)}
            />
          )}
        </View>
        <View>
          <PrimaryButton
            size="md"
            mb={8}
            onPress={isLoading ? () => {} : () => submitOrdemDeServico()}
          >
            {isLoading ? "..." : "Finalizar OS"}
          </PrimaryButton>

          <SecondaryButton size="md" onPress={() => goToHomePage()}>
            Cancelar Preenchimento
          </SecondaryButton>
        </View>
      </ScrollView>

      <ListMaterialDialog
        modalDialog={modalSelectMaterialDialog}
        handleModalDialog={(status) => handleCloseSelectMaterialDialog(status)}
        pushMaterial={(item) => handleSelectMaterial(item)}
      />

      <UsedMaterialDialog
        edit={editMaterial}
        insertMaterial={material}
        modalDialog={modalUseMaterialDialog}
        pushMaterial={(item) => handlePushMaterial(item)}
        handleRemoveMaterial={(id) => handleRemoveMaterial(id)}
        handleModalDialog={(status) => handleCloseAddMaterialDialog(status)}
      />

      <ConfirmationDialog
        modalDialog={modalConfimationHabilitadoDialog}
        headerText={"Confirmar exclusão de IRD"}
        bodyText={"Tem certeza que deseja excluir este IRD?"}
        handleConfirmationButton={handleConfirmDeleteIRDHabilitado}
        handleRejectButton={handleRejectDeleteIRDHabilitado}
      />

      <ConfirmationDialog
        modalDialog={modalConfimationRetiradoDialog}
        headerText={"Confirmar exclusão de IRD"}
        bodyText={"Tem certeza que deseja excluir este IRD?"}
        handleConfirmationButton={handleConfirmDeleteIRDRetirado}
        handleRejectButton={handleRejectDeleteIRDRetirado}
      />
      <Alert
        showAlert={alert.modal}
        backgroundColor={alert.backgroundColor}
        handleTimeout={(status) => alertTimout(status)}
      >
        {alert.text}
      </Alert>
      {/* <Scan /> */}
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
    padding: 4,
  },
});
