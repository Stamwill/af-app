import * as React from 'react'
import Search from 'components/Search'
import Hamburger from 'components/Hamburger'
import classes from './Navbar.module.css'

function Navbar(props) {
  return (
    <div className={classes.root}>
      <div>
        <img className={classes.image} src="//source.unsplash.com/40x50?bear" alt="" />
      </div>

      <div>
        <h3 className={classes.heading}>Af-App</h3>
      </div>

      <div className={classes.container}>
        <Search />
        <span className={classes.line} />
        <Hamburger />
      </div>
    </div>
  )
}

export default Navbar
