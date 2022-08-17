import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './content/Navbar'
import { PrincipalPage } from './content/PrincipalPage'
import './styles.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import { GifStickerApp } from './GifStickerApp'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GifStickerApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
