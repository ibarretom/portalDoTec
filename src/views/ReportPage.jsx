import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";


import { TwoColumnWithHeadersTable } from "../components/TwoColumnWithHeadersTable";
import { OneColumnTable } from "../components/OneColumnTable";
import { TabBar } from "../components/TabBar";
import { getOSsByTecAndDate } from "../services/database";
import { useAuth } from "../hooks/useAuth";

import _ from "lodash";
import { AppDatePicker } from "../components/form/AppDatePicker";

export function ReportPage({ navigation }) {
  const { user } = useAuth();

  const [material, setMaterial] = useState([]);
  const [IRDsHabilitados, setIRDsHabilitados] = useState([]);
  const [IRDsRetirados, setIRDsRetirados] = useState([]);

  const [date, setDate] = useState(new Date().toLocaleDateString())

  function goToHomePage() {
    navigation.navigate("HomePage");
  }

  useEffect(() => {
    getOSsByTecAndDate({
      id_tec: user.uid,
      date: date,
    })
      .then((r) => {
        organizeMaterialAndIRDs(r);
      })
      .catch((e) => console.error(e));
  }, [date]);

  function organizeMaterialAndIRDs(data) {
    const tempIRDsHabilitados = [];
    const tempIRDsRetirados = [];
    const tempMaterials = {};

    for (let os = 0; os < data.length; os++) {
      const OS = data[os];
      OS.IRDsHabilitados &&
        OS.IRDsHabilitados.forEach((ird) => tempIRDsHabilitados.push(ird));

      OS.IRDsRetirados &&
        OS.IRDsRetirados.forEach((ird) => tempIRDsRetirados.push(ird));

      OS.materiais &&
        OS.materiais.forEach((material) => {
          if (!!tempMaterials[material.name]) {
            tempMaterials[material.name].amount =
              parseInt(material.amount) +
              parseInt(tempMaterials[material.name].amount);
          } else {
            tempMaterials[material.name] = material;
          }
        });
    }

    setIRDsHabilitados(_.cloneDeep(tempIRDsHabilitados));
    setIRDsRetirados(_.cloneDeep(tempIRDsRetirados));

    setMaterial(objectToArray(tempMaterials));
  }

  function objectToArray(object) {
    const array = [];
    for (let key in object) {
      array.push({ ...object[key] });
    }
    return array;
  }
  return (
    <>
      <TabBar onClickBack={() => goToHomePage()} />
      <ScrollView style={styles.main}>
        <Text style={styles.mainText}>Relatório de materiais</Text>

        <AppDatePicker setDate={(date) => setDate(date)} />

        <TwoColumnWithHeadersTable data={material} keys={["name", "amount"]} />

        <OneColumnTable
          title={"IRDs Habilitados"}
          data={IRDsHabilitados}
          keys={["name"]}
          onPressRow={() => { }}
        />

        <OneColumnTable
          title={"IRDs Retirados"}
          data={IRDsRetirados}
          keys={["name"]}
          onPressRow={() => { }}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16,
  },
  secondaryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
});
