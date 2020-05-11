import * as React from 'react'
import classes from './Search.module.css'
import logo from './searchLogo.png'

function Search() {
  return (
    <div className={classes.root}>
      <a className={classes.search} href="/">
        <div>
          <img className={classes.logo} src={logo} alt="" />
          <span className={classes.span}>Search</span>
        </div>
      </a>
    </div>
  )
}

export default Search
