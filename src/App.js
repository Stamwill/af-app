import React from 'react'
import * as api from 'api/mock'
import Home from 'pages/Home'
import Navbar from 'components/Navbar'
import Banner from 'components/Banner'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar menu={api.menuPrimary} />
      <Banner menu={api.menuPrimary} />
      <Home {...api.startPage} />
    </div>
  )
}

export default App
