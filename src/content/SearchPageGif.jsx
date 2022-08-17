import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, onReset } from "../store/gifsSlice";
import { getGifsCategory } from "../store/thunks";
import { Navbar } from "./Navbar"


export const SearchPageGif = () => {

    const [inputValue, setInputValue] = useState("gif");

    const { gifsCategory, page, formSubmitted } = useSelector(state => state.gifs);
    const dispatch = useDispatch()

    const onChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(getGifsCategory(inputValue, page))
        // setInputValue("");
        dispatch(onReset());
    }

    const onNextPage = () => {
        dispatch(increment())
    }

    const onPreviousPage = () => {
        dispatch(decrement());
    }

    useEffect(() => {
        dispatch(getGifsCategory(inputValue, page));
    }, [page])


    return (
        <>
            <Navbar />
            <div className="search-page">

                {/* <h1>looking for a gif</h1> */}

                <form className="animate__animated animate__fadeIn" onSubmit={onSubmit}>
                    <input onChange={onChange} type="text" value={inputValue} />
                    <button type="submit">Search Gif</button>
                </form>

                <ul className="animate__animated animate__fadeIn">
                    {
                        gifsCategory.map(item => {
                            return (
                                <li key={item.id}>

                                    <img src={item.images.preview_gif.url} alt={item.title} />
                                </li>
                            )
                        })
                    }
                </ul>

                <div id="final-buttons" className="animate__animated animate__fadeIn">
                    <button onClick={onPreviousPage}>Previous</button>
                    <button onClick={onNextPage}>Next</button>
                </div>

            </div>


        </>
    )
}
