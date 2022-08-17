import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from "../auth/tunksAuth";


export const Navbar = () => {

    const { displayName } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav>
            <div className="left-side">
                <Link to="/Gifs-Stickers-trending">Gif-sticker-emoji</Link>
                <Link to="/search-Gif">Search Gif</Link>
                <Link to="/search-Sticker">Search Sticker</Link>
            </div>

            <div className="right-side">
                <p>{displayName}</p>
                <button onClick={onLogout}>Logout</button>
            </div>

        </nav>
    )
}
