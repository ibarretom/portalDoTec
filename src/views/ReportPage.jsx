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
