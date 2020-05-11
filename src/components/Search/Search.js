import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './Search.module.css'
import logo from './searchLogo.png'

const Search = React.forwardRef(function Search(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <a className={classes.search} href="/">
        <div>
          <img className={classes.logo} src={logo} alt="" />
          <span className={classes.span}>Search</span>
        </div>
      </a>
    </div>
  )
})

Search.propTypes = {
  className: PropTypes.string,
}

export default Search
