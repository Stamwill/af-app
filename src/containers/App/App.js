import * as React from 'react'
import * as api from 'api/mock'
import Home from 'pages/Home'
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
    setSearchOpen(false)
  }

  const toggleSearch = () => {
    setSearchOpen((prevState) => !prevState)
    setMenuOpen(false)
  }

  const togglePadding = (state) => {
    const body = document.body.style

    if (state) {
      body.paddingRight = '17px'
      body.overflow = 'hidden'
    } else {
      body.paddingRight = ''
      body.overflow = 'auto'
    }
  }

  return (
    <div className={classes.root}>
      <AppAppBar open={searchIsOpen}>
        <Toolbar>
          <AppNav primary={api.menuPrimary} toggleSearch={toggleSearch} toggleMenu={toggleMenu} />
          <AppDrawer open={menuIsOpen} menu={api.menuPrimary} />
          <SearchDrawer open={searchIsOpen} onToggle={togglePadding} />
        </Toolbar>
      </AppAppBar>

      <main className={classes.main}>
        <Home {...api.startPage} menu={api.menuPrimary} />
      </main>

      <footer>
        <Footer menus={api.menuPrimary} />
      </footer>
    </div>
  )
}

export default App
