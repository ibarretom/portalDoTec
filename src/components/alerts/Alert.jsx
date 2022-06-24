import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export function Alert({
  showAlert,
  children,
  iconName = "warning",
  backgroundColor = "#2a3b4d",
  color = "#fff",
  time = 3000,
  handleTimeout = () => {},
}) {
  const [modal, setModal] = useState();

  useEffect(() => {
    setModal(showAlert);
    setTimeout(() => {
      setModal(false);
      handleTimeout(false);
    }, time);
  }, [showAlert]);

  return (
    <View style={[modal ? styles.alertContent : styles.hideAlert]}>
      <View style={[styles.alert, { backgroundColor: backgroundColor }]}>
        <Icon size={32} name={iconName} color={color} />
        <Text style={{ color: color, marginLeft: 16 }}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertContent: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  alert: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 16,
    paddingVertical: 8,

    width: 340,
    borderRadius: 8,

    elevation: 2,
  },
  hideAlert: {
    display: "none",
  },
});
