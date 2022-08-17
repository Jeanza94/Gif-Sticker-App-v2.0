
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try {
        const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    }

    catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const registerUserWithEmailAndPassword = async (email, password, displayName) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = userCredential.user;
        // udpade the displayName abour oru new user

        await updateProfile(FirebaseAuth.currentUser, { displayName });
        console.log(userCredential);
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    }

    catch (error) {

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailAndPassword = async (email, password) => {

    try {
        const userCredential = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL, displayName } = userCredential.user;

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    }

    catch (error) {

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}