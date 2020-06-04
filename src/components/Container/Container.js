import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { capitalize } from 'utils'
import classes from './Container.module.css'

const Container = React.forwardRef(function Container(props, ref) {
  const {
    className,
    children,
    component: Component = 'div',
    disableGutters,
    maxWidth = 'lg',
    ...other
  } = props

  return (
    <Component
      className={classnames(
        classes.root,
        {
          [classes.disableGutters]: disableGutters,
          [classes[`maxWidth${capitalize(String(maxWidth))}`]]: maxWidth !== false,
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

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disableGutters: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
}

Container.uiName = 'Container'

export default Container
