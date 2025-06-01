import React, { createContext, useEffect, useState } from 'react'
import {  createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const signinWithEmail = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const logOut = () => {
    return signOut(auth)
  };
    const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <AuthContext.Provider value={{
        signinWithEmail,
        user,
        logOut,
        loginWithEmail
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;