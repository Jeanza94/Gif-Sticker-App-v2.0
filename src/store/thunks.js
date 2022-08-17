import { setGifs, setGifsCategory, setStickers, setStickersCategory } from "./gifsSlice";

export const getGifs = () => {

    return async (dispatch) => {
        try {
            const resp = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZInSlXCD4Gt0cEROAYGaYOUMY7GmFYdJ&limit=12');
            const { data } = await resp.json();

            dispatch(setGifs(data));
        }

        catch (error) {
            console.log(error);
        }
    }
}

export const getStickers = () => {

    return async (dispatch) => {
        try {
            const resp = await fetch('https://api.giphy.com/v1/stickers/trending?api_key=ZInSlXCD4Gt0cEROAYGaYOUMY7GmFYdJ&limit=12');
            const { data } = await resp.json();

            dispatch(setStickers(data));
        }

        catch (error) {
            console.log(error);
        }
    }
}

export const getGifsCategory = (category, page = 0) => {

    return async (dispatch) => {
        try {
            const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZInSlXCD4Gt0cEROAYGaYOUMY7GmFYdJ&q=${category}&limit=9&offset=${page}`);
            const { data } = await resp.json();

            dispatch(setGifsCategory(data));
        }

        catch (error) {
            console.log(error);
        }
    }
}

export const getStickersCategory = (category, page = 0) => {

    return async (dispatch) => {
        try {
            const resp = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=ZInSlXCD4Gt0cEROAYGaYOUMY7GmFYdJ&q=${category}&limit=9&offset=${page}`);
            const { data } = await resp.json();

            dispatch(setStickersCategory(data));
        }

        catch (error) {
            console.log(error);
        }
    }
}