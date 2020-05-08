import React from 'react'
import Navigation from 'components/Navigation'
import './Banner.css'

function Banner(props) {
  const { menu } = props
  return (
    <div className="Banner">
      <img
        src="//source.unsplash.com/1080x715?hiking"
        alt="person jumping"
        className="Banner-Background"
      />
      <Navigation menu={menu} />
    </div>
  )
}

export default Banner
