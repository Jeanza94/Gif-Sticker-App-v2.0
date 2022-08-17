import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        authentication: "checking", //checking, authenticated, not authenticated
        displayName: null,
        email: null,
        uid: null,
        photoURL: null
    },

    reducers: {

        startSignIn: (state, action) => {
            state.authentication = "checking";
        },

        login: (state, { payload }) => {
            state.authentication = "authenticated";
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.uid = payload.uid;
            state.photoURL = payload.photoURL;
        },

        logout: (state, { payload }) => {
            state.authentication = "not authenticated";
            state.displayName = null;
            state.email = null;
            state.uid = null;
            state.photoURL = null;
        },

    }
});


// Action creators are generated for each case reducer function
export const { startSignIn, login, logout } = authSlice.actions;