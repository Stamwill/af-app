import React from 'react'
import * as api from 'api/mock'
import Banner from 'components/Banner'
import './App.css'

function App() {
  return (
    <div className="App">
      <Banner menu={api.menuPrimary} />
    </div>
  )
}

export default App
