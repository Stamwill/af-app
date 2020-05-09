import React from 'react'
import PropTypes from 'prop-types'
import { cardType } from 'utils'
import './Gallery.css'

function Gallery(props) {
  const { cards } = props
  return (
    <div className="Gallery">
      {cards.map((card, idx) => (
        <div key={idx} className="Gallery-Card">
          <img src="//source.unsplash.com/407x270?hiking" alt={card.alt} />
          <h1 className="Gallery-Card-Header">{card.title}</h1>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  )
}

Gallery.propTypes = {
  cards: PropTypes.arrayOf(cardType),
  text: PropTypes.string,
}

export default Gallery
