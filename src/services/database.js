import { db, set, ref, get, child } from "../plugins/firebase";
import uuid from "react-native-uuid";

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

export async function getAllData({ docName }) {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, docName));
    if (snapshot.exists()) {
      return objectToArray(snapshot.val());
    }
  } catch (e) {
    return e;
  }
}

function objectToArray(object) {
  const array = [];
  for (let key in object) {
    array.push({ id: key, ...object[key] });
  }
  return array;
}
