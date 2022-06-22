import { createContext, useEffect, useState } from "react";

import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../plugins/firebase";

export const AuthContext = createContext({});

export function Auth({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLogIn, setIsLogIn] = useState(false);

  async function signIn({ email, password }) {
    const {user, _tokenResponse} = await signInWithEmailAndPassword(auth, email, password);
    setUser(user);
    setToken(_tokenResponse);
    setIsLogIn(true);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogIn(true);
      } else {
        setUser(null);
        setIsLogIn(false);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, isLogIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
