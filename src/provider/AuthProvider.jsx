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
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [modalId, setModalId] = useState();
  const [applyModalId, setApplyModalId] = useState();

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

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios.post(`http://localhost:9000/jwt`,user,{withCredentials:true})
        .then(res=>{
          console.log('login token',res.data);
          setLoading(false);
        })
      }else{
        axios.post(`http://localhost:9000/logout`,{},{
          withCredentials:true
        })
        .then(res=>{
          console.log('logout',res.data);
          setLoading(false);
        })
      }

      
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
    modalId,
    setModalId,
    applyModalId,
    setApplyModalId,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
