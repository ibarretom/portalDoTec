import { useState } from "react"
import { StyleSheet, Text } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker";

import Reapple from "react-native-material-ripple";
import Icon from "react-native-vector-icons/MaterialIcons"
const datePickerObj = {
  date: new Date(),
  mode: "date",
  show: false,
  text: new Date().toLocaleDateString("pt-BR"),
};

export function AppDatePicker({ setDate }) {
  const [datePicker, setDatePicker] = useState({ ...datePickerObj });

  function showMode(currentMode) {
    setDatePicker({ ...datePicker, show: true, mode: currentMode });
  }

  function onChangeDatePicker(event, selectedDate) {
    const currentDate = selectedDate || datePicker.date;
    setDatePicker({
      ...datePicker,
      show: event.type === "set" || event.type === "dismissed" ? false : true,
      date: currentDate,
      text: setDateText(currentDate),
    });

    selectedDate && setDate(selectedDate.toLocaleDateString())
  }

  function setDateText(date) {
    const dateText = date.toLocaleDateString().split("/")

    const textAux = dateText[0]

    dateText[0] = dateText[1]
    dateText[1] = textAux

    return dateText.join("/")
  }

  return (
    <>
      <Reapple style={styles.dateButton} onPress={() => showMode("date")}>
        <Text style={styles.dataButtonText}>{datePicker.text}</Text>
        <Icon
          style={styles.calendarIcon}
          size={32}
          name={"calendar-today"}
          color="#999"
        />
      </Reapple>
      {
        datePicker.show &&
        <DateTimePicker
          testID="dateTimePicker"
          value={datePicker.date}
          mode={datePicker.mode}
          display="default"
          onChange={onChangeDatePicker}
        />
      }
    </>
  )
}

const styles = StyleSheet.create({
  dateButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 8,
    paddingHorizontal: 8,

    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8
  },
  dataButtonText: {
    flex: 1
  }
});
