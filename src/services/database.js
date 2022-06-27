import { db, set, ref, onValue } from "../plugins/firebase";
import uuid from "react-native-uuid";
import { get } from "lodash";

export async function addDoc({ docName, docData }) {
  try {
    const docRef = await set(ref(db, `${docName}/${uuid.v4()}`), {
      ...docData,
    });
    return { doc: docRef, message: "Documento escrito" };
  } catch (e) {
    return { error: e.message };
  }
}

export async function getAllData({ dataName }) {
  let data = [];
  dbRef = ref(db);
  const snapshot = await get(child(dbRef, dataName));
  if(snapshot.exists()) {
    data = snapshot.val()
  }else {
    console.warn("no data")
  }
  return data;
}
