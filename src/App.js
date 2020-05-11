import React from 'react'
import * as api from 'api/mock'
import Navbar from 'components/Navbar'
import Banner from 'components/Banner'
import Gallery from 'components/Gallery'
import PageButtons from 'components/PageButtons'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar menu={api.menuPrimary} />
      <Banner menu={api.menuPrimary} />
      <PageButtons buttons={api.galleryNumber} />
      <Gallery {...api.cardPage} />
    </div>
  )
}

export default App
