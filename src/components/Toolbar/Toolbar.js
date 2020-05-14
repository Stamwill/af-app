import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './Toolbar.module.css'

const Toolbar = React.forwardRef(function Toolbar(props, ref) {
  const {
    className,
    children,
    component: Component = 'div',
    disabledGutters,
    variant = 'regular',
    ...other
  } = props

  return (
    <Component
      className={classnames(
        classes.root,
        classes[variant],
        {
          [classes.gutters]: !disabledGutters,
        },
        className,
      )}
      ref={ref}
      {...other}
    >
      {children}
    </Component>
  )
})

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabledGutters: PropTypes.bool,
  variant: PropTypes.oneOf(['regular', 'dense']),
}

Toolbar.uiName = 'Toolbar'

export default Toolbar
