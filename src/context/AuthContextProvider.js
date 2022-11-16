import { useState, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function handleLogout() {
    try {
      await logout();
      alert("Вы вышли из аккаунта");
      navigate("/pageproduct");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
