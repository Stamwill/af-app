import * as React from 'react'
import logo from './burgerLogo.png'
import classes from './Hamburger.module.css'

function Hamburger() {
  return (
    <div>
      <img className={classes.logo} src={logo} alt="" />
    </div>
  )
}

export default Hamburger
