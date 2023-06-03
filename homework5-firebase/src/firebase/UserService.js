import { auth } from "./init";
import { useState, useEffect } from "react";

import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const logInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch(err) {
        console.log({err});
        alert(err.message);
    }
}

export const logInWithFacebook = async () => {
    try {
        await signInWithPopup(auth, facebookProvider);
    } catch(err) {
        console.log({err});
        alert(err.message);
    }
}

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const unsubscribe =
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    return user;
}

export const logout = () => signOut(auth);
