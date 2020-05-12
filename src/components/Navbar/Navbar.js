import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import { menuLinkType } from 'utils'
import Search from 'components/Search'
import Hamburger from 'components/Hamburger'
import classes from './Navbar.module.css'

const Navbar = React.forwardRef(function Navbar(props, ref) {
  const { menus, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.image}>
        <img src="//source.unsplash.com/40x50?bear" alt="" />
      </div>

      <div>
        <h3 className={classes.heading}>Af-App</h3>
      </div>

      <div className={classes.container}>
        <Search />
        <span className={classes.line} />
        <Hamburger menus={menus} />
      </div>
    </div>
  )
})

Navbar.propTypes = {
  menus: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
}

export default Navbar
