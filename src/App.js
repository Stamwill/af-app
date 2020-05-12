import React from 'react'
import * as api from 'api/mock'
import Home from 'pages/Home'
import Navbar from 'components/Navbar'
import Banner from 'components/Banner'
import Footer from 'components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar menus={api.menuPrimary} />
      <Banner menus={api.menuPrimary} />
      <Home {...api.startPage} />
      <Footer menus={api.menuPrimary} />
    </div>
  )
}

export default App
