import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import logo from './burgerLogo.png'
import classes from './Hamburger.module.css'

const Hamburger = React.forwardRef(function Hamburger(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <img className={classes.logo} src={logo} alt="" />
    </div>
  )
})

Hamburger.propTypes = {
  className: PropTypes.string,
}

export default Hamburger
