
import { async } from "@firebase/util";
import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, signInWithGoogle } from "../firebase/providers";
import { login, logout, startSignIn } from "./authSlice"

export const startSignInWithGoogle = () => {

    return async (dispatch) => {

        dispatch(startSignIn());
        const result = await signInWithGoogle();

        !result.ok
            ? dispatch(logout())
            : dispatch(login(result))
    }
}

export const startRegisterUserWithEmailAndPassword = (email, password, displayName) => {

    return async (dispatch) => {
        dispatch(startSignIn());
        const result = await registerUserWithEmailAndPassword(email, password, displayName);

        !result.ok
            ? dispatch(logout())
            : dispatch(login(result))
    }
}

export const startLoginWithEmailAndPassword = (email, password) => {

    return async (dispatch) => {
        dispatch(startSignIn());

        const result = await loginWithEmailAndPassword(email, password);


        !result.ok
            ? dispatch(logout())
            : dispatch(login(result))

    }
}

export const startLogout = () => {
    return async (dispatch) => {

        await logoutFirebase();
        dispatch(logout());
    }
}