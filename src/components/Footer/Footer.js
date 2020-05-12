import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Footer.module.css'

const Footer = React.forwardRef(function Footer(props, ref) {
  const { className, children, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {children}
    </div>
  )
})

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Footer.uiName = 'Footer'

export default Footer
