
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getStickers } from "../store/thunks";
import { getGifs } from "../store/thunks";
import { Navbar } from "./Navbar"


export const PrincipalPage = () => {

    const { gifs, stickers } = useSelector(state => state.gifs)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGifs());
        dispatch(getStickers());
    }, [])

    return (
        <>
            <Navbar />
            <div className="principal-page">
                <h1 className="animate__animated animate__fadeIn">Gifs in trending right now</h1>
                <div >
                    <ul className="principal-page-ul-wrap-list animate__animated animate__fadeIn">
                        {
                            gifs.map(item => {
                                return (
                                    <li key={item.id}>
                                        <p>{item.title}</p>
                                        <img src={item.images.downsized_medium.url} alt={item.title} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <h1 className="animate__animated animate__fadeIn">Stickers in trending right now</h1>
                <div >
                    <ul className="principal-page-ul-wrap-list animate__animated animate__fadeIn">
                        {
                            stickers.map(item => {

                                return (
                                    <li key={item.id}>
                                        <p>{item.title}</p>
                                        <img src={item.images.downsized_medium.url} alt={item.title} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}
