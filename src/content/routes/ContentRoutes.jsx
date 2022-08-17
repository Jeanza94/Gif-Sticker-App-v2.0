import { Navigate, Route, Routes } from "react-router-dom"
import { PrincipalPage } from "../PrincipalPage"
import { SearchPageGif } from "../SearchPageGif"
import { SearchPageSticker } from "../SearchPageSticker"


export const ContentRoutes = () => {
    return (
        <Routes>
            <Route path="/Gifs-Stickers-trending" element={<PrincipalPage />} />
            <Route path="/search-Gif" element={<SearchPageGif />} />
            <Route path="/search-Sticker" element={<SearchPageSticker />} />

            <Route path="/*" element={<Navigate to="/Gifs-Stickers-trending" />} />
        </Routes>
    )
}
