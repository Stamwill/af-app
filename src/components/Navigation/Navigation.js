import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import { linkType } from 'utils'
import classes from './Navigation.module.css'

const Navigation = React.forwardRef(function Navigation(props, ref) {
  const { menus, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {menus.map((menu, idx) => (
        <button className={classes.button} type="button" key={idx} url={menu.url}>
          {menu.label}
        </button>
      ))}
    </div>
  )
})

Navigation.propTypes = {
  menus: PropTypes.arrayOf(linkType).isRequired,
  className: PropTypes.string,
}

export default Navigation
