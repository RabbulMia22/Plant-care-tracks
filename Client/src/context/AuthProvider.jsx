import React, { createContext, useEffect, useState } from 'react'
import {  createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signinWithEmail = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    };
    
    const logOut = () => {
    return signOut(auth)
  };
  
    const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  return (
    <AuthContext.Provider value={{
        signinWithEmail,
        user,
        logOut,
        loginWithEmail,
        loginWithGoogle,
        loading,
        setLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;