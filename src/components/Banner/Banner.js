import * as React from 'react'
import Navigation from 'components/Navigation'
import classes from './Banner.module.css'

function Banner(props) {
  const { menu } = props

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Martin tittar, se upptagna ut</h1>

      <img className={classes.background} src="//source.unsplash.com/1080x715?hiking" alt="" />
      <Navigation menu={menu} />
    </div>
  )
}

export default Banner
