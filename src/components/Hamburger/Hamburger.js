import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import burgerLogo from './burgerLogo.png'
import classes from './Hamburger.module.css'

const Hamburger = React.forwardRef(function Hamburger(props, ref) {
  const { toggleMenu, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <button className={classes.button} type="button">
        <img className={classes.burgerLogo} onClick={toggleMenu} src={burgerLogo} alt="" />
      </button>
    </div>
  )
})

Hamburger.propTypes = {
  className: PropTypes.string,
  toggleMenu: PropTypes.func,
}

export default Hamburger
