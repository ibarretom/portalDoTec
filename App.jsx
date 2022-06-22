import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Text,
} from "react-native";
import { Auth } from "./src/context/Auth";

import { Router } from "./src/routes/Router";
export default function App() {
  return (
    <Auth>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </Auth>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
