import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUserWithemailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  const updateUserProfile = (upedatedUser) => {
    return updateProfile(auth.currentUser, upedatedUser);
  };

  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscirbe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscirbe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createUserWithemailPass,
    updateUserProfile,
    logInUser,
    signOutUser,
    signInWithGoogle,
    forgetPass,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
