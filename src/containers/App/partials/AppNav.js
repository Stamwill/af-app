import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import { menuLinkType } from 'utils'
import Search from 'components/Search'
import Hamburger from 'components/Hamburger'
import classes from './AppNav.module.css'

const AppNav = React.forwardRef(function AppNav(props, ref) {
  const { primary, className, ...other } = props

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
        <Hamburger primary={primary} />
      </div>
    </div>
  )
})

AppNav.propTypes = {
  primary: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
}

export default AppNav