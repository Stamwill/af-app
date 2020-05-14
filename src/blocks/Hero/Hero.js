import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { menuLinkType } from 'utils'
import HeroNav from './partials/HeroNav'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { menu, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h1 className={classes.heading}>Power of the Bear</h1>
      <img className={classes.background} src="//source.unsplash.com/1080x715?hiking" alt="" />
      <HeroNav primary={menu} />
    </div>
  )
})

Hero.propTypes = {
  menu: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
}

export default Hero