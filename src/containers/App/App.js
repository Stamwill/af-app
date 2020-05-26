import * as React from 'react'
import * as api from 'api/mock'
import Home from 'pages/Home'
import Hero from 'blocks/Hero'
import Footer from 'components/Footer'
import Toolbar from 'components/Toolbar'
import AppAppBar from './partials/AppAppBar'
import AppNav from './partials/AppNav'
import AppDrawer from './partials/AppDrawer'
import classes from './App.module.css'
import SearchDrawer from './partials/SearchDrawer'

function App() {
  const [menuIsOpen, setMenuOpen] = React.useState(false)
  const [searchIsOpen, setSearchOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const toggleSearch = () => {
    setSearchOpen((prevState) => !prevState)
  }

  return (
    <div className={classes.root}>
      <AppAppBar>
        <Toolbar>
          <AppNav primary={api.menuPrimary} toggleSearch={toggleSearch} toggleMenu={toggleMenu} />
        </Toolbar>
      </AppAppBar>

      <Hero menu={api.menuPrimary} />
      <Home {...api.startPage} />
      <Footer menus={api.menuPrimary} />

      <SearchDrawer open={searchIsOpen} menu={api.menuPrimary} />

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
