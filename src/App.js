import React from 'react'
import * as api from 'api/mock'
import Banner from 'components/Banner'
import Gallery from 'components/Gallery'
import './App.css'

function App() {
  return (
    <div className="App">
      <Banner menu={api.menuPrimary} />
      <Gallery {...api.cardPage} />
    </div>
  )
}

export default App
