import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import Navigation from 'components/Navigation'
import classes from './Banner.module.css'

const Banner = React.forwardRef(function Banner(props, ref) {
  const { menu, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1 className={classes.heading}>Martin tittar, se upptagna ut</h1>

      <img className={classes.background} src="//source.unsplash.com/1080x715?hiking" alt="" />
      <Navigation menu={menu} />
    </div>
  )
})

Banner.propTypes = {
  menu: PropTypes.string,
  className: PropTypes.string,
}

export default Banner
