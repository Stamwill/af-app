import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import { menuLinkType } from 'utils'
import logo from './burgerLogo.png'
import classes from './Hamburger.module.css'

const Hamburger = React.forwardRef(function Hamburger(props, ref) {
  const { menus, className, ...other } = props

  function openNav() {
    document.getElementById('myNav').style.height = '100%'
  }

  function closeNav() {
    document.getElementById('myNav').style.height = '0%'
  }

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <img className={classes.logo} src={logo} alt="" onClick={openNav} />

      <div id="myNav" className={classes.overlay}>
        <span className={classes.close} onClick={closeNav}>
          close
        </span>

        <div className={classes.content}>
          {menus.map((menu, idx) => (
            <a className={classes.burgerMenu} key={idx} href={menu.url}>
              {menu.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
})

Hamburger.propTypes = {
  menus: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
}

export default Hamburger
