import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './Navigation.module.css'

function Navigation(props) {
  const { menu } = props

  return (
    <div>
      {menu.map((menu, idx) => (
        <button className={classes.navButton} type="button" key={idx} url={menu.url}>
          {menu.label}
        </button>
      ))}
    </div>
  )
}

Navigation.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
}

export default Navigation
