import React, { useEffect, useState } from "react"
import { Text, StyleSheet, ScrollView } from "react-native"
import { AppDatePicker } from "../components/form/AppDatePicker"
import { OSCard } from "../components/OSCard";
import { TabBar } from "../components/TabBar";
import { useAuth } from "../hooks/useAuth";
import { getOSsByTecAndDate } from "../services/database";

export function ListOS({ navigation }) {
  const { user } = useAuth();

  const [OS, setOSs] = useState([]);

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
        setOSs(r);
      })
      .catch((e) => console.error(e));
  }, [date]);

  return (
    <>
      <TabBar onClickBack={goToHomePage} />
      <ScrollView style={styles.main} contentContainerStyle={{ paddingBottom: 16 }}>
        <Text style={styles.mainText}>Relatório de materiais</Text>

        <AppDatePicker setDate={(date) => setDate(date)} />

        {OS.map(os => <OSCard OSData={os} />)}
      </ScrollView>
    </>

  )
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
})