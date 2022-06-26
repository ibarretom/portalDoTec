import { db, set, ref } from "../plugins/firebase";
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
