import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import { linkType } from 'utils'
import classes from './HeroNav.module.css'

const HeroNav = React.forwardRef(function HeroNav(props, ref) {
  const { primary, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {primary.map((menuItem, idx) => (
        <a key={idx} className={classes.button} href={menuItem.url}>
          {menuItem.label}
        </a>
      ))}
    </div>
  )
})

HeroNav.propTypes = {
  primary: PropTypes.arrayOf(linkType).isRequired,
  className: PropTypes.string,
}

export default HeroNav
