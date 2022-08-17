import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom'
import { login, logout } from '../auth/authSlice';
import { LoginPage } from '../auth/LoginPage'
import { RegisterPage } from '../auth/RegisterPage'
import { PrincipalPage } from '../content/PrincipalPage'
import { SearchPageGif } from '../content/SearchPageGif'
import { SearchPageSticker } from '../content/SearchPageSticker'
import { FirebaseAuth } from '../firebase/config'
import { useSelector } from 'react-redux';
import { CheckingPage } from '../auth/CheckingPage';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ContentRoutes } from '../content/routes/ContentRoutes';


export const RouterApp = () => {

    const { authentication } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            if (user) {
                const { uid, photoURL, email, displayName } = user;
                dispatch(login({ uid, photoURL, email, displayName }))
            }
            else {
                dispatch(logout())
            }
        })

    }, [])

    if (authentication === 'checking') {
        return <CheckingPage />
    }

    return (
        <Routes>
            {
                authentication === 'authenticated'
                    ? <Route path="/*" element={<ContentRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes >
    )

}



