import { createSlice } from '@reduxjs/toolkit';


export const gifsSlice = createSlice({
    name: 'gifs',
    initialState: {
        gifs: [],
        stickers: [],
        gifsCategory: [],
        stickersCategory: [],
        page: 0,
        formSubmitted: false
    },
    reducers: {

        setGifs: (state, { payload }) => {
            state.gifs = payload;
        },

        setStickers: (state, { payload }) => {
            state.stickers = payload;
        },

        setGifsCategory: (state, { payload }) => {
            state.gifsCategory = payload;
            state.formSubmitted = true;
        },

        setStickersCategory: (state, { payload }) => {
            state.stickersCategory = payload;
            state.formSubmitted = true;
        },

        increment: (state) => {
            state.page += 9;
        },

        decrement: (state) => {
            if (state.page >= 9) {
                state.page -= 9;
            }
        },

        onReset: (state) => {
            state.page = 0;
        }

    }
});


// Action creators are generated for each case reducer function
export const { setGifs, setStickers, setGifsCategory, setStickersCategory, increment, decrement, onReset } = gifsSlice.actions;