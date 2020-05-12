import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { menuLinkType } from 'utils'
import Navigation from 'components/Navigation'
import classes from './Banner.module.css'

const Banner = React.forwardRef(function Banner(props, ref) {
  const { menus, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1 className={classes.heading}>Martin tittar, se upptagna ut</h1>

      <img className={classes.background} src="//source.unsplash.com/1080x715?hiking" alt="" />
      <Navigation menus={menus} />
    </div>
  )
})

Banner.propTypes = {
  menus: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
}

export default Banner
