import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import classes from './Search.module.css'
import logo from './searchLogo.png'

const Search = React.forwardRef(function Search(props, ref) {
  const { toggleSearch, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.search} onClick={toggleSearch}>
        <img className={classes.logo} src={logo} alt="" />
        <span className={classes.span}>Search</span>
      </div>
    </div>
  )
})

Search.propTypes = {
  className: PropTypes.string,
  toggleSearch: PropTypes.func,
}

export default Search
