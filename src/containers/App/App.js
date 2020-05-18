import * as React from 'react'
import * as api from 'api/mock'
import Home from 'pages/Home'
import Hero from 'blocks/Hero'
import Footer from 'components/Footer'
import AppBar from 'components/AppBar'
import Toolbar from 'components/Toolbar'
import AppNav from './partials/AppNav'
import AppDrawer from './partials/AppDrawer'
import classes from './App.module.css'

function App() {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <AppNav primary={api.menuPrimary} toggleMenu={toggleMenu} />
        </Toolbar>
      </AppBar>
      <Hero menu={api.menuPrimary} />
      <Home {...api.startPage} />
      <Footer menus={api.menuPrimary} />

      <AppDrawer open={menuIsOpen} menu={api.menuPrimary} />
    </div>
  )
}

export default App

// App(container) header + children + footer
//   Pages (home) consists of blocks
//     blocks
//       containers
//         components
