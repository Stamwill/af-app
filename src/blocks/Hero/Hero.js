import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { menuLinkType } from 'utils'
import Section from 'components/Section'
import HeroNav from './partials/HeroNav'
import classes from './Hero.module.css'

const Hero = React.forwardRef(function Hero(props, ref) {
  const { menu, className, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} disableSpacing ref={ref} {...other}>
      <h1 className={classes.heading}>The Northern Spirit</h1>

      <img className={classes.background} src="//source.unsplash.com/1080x715?hiking" alt="" />

      <HeroNav primary={menu} />
    </Section>
  )
})

Hero.propTypes = {
  menu: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
}

export default Hero
