import * as React from 'react'
import PropTypes from 'prop-types'
import { cardType } from 'utils'
import classes from './Gallery.module.css'

function Gallery(props) {
  const { cards } = props

  return (
    <div className={classes.root}>
      {cards.map((card, idx) => (
        <div className={classes.card} key={idx}>
          <img className={classes.img} src="//source.unsplash.com/407x270?hiking" alt="" />

          <h2 className={classes.heading}>{card.title}</h2>

          <p className={classes.paragraph}>{card.text}</p>
        </div>
      ))}
    </div>
  )
}

Gallery.propTypes = {
  cards: PropTypes.arrayOf(cardType),
}

export default Gallery
