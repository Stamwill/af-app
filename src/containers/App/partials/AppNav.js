import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import { menuLinkType } from 'utils'
import Search from 'components/Search'
import Hamburger from 'components/Hamburger'
import classes from './AppNav.module.css'

const AppNav = React.forwardRef(function AppNav(props, ref) {
  const { toggleSearch, toggleMenu, primary, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.image}>
        <img className={classes.logo} src="/companyLogo.png" alt="" />
      </div>

      <div>
        <h3 className={classes.heading}>Hiking Spirit</h3>
      </div>

      <div className={classes.container}>
        <Search toggleSearch={toggleSearch} />

        <span className={classes.line} />

        <Hamburger toggleMenu={toggleMenu} />
      </div>
    </div>
  )
})

AppNav.propTypes = {
  primary: PropTypes.arrayOf(menuLinkType).isRequired,
  toggleSearch: PropTypes.func,
  toggleMenu: PropTypes.func,
  className: PropTypes.string,
}

export default AppNav
