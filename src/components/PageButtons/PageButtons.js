import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './PageButtons.module.css'

function PageButtons(props) {
  const { buttons } = props
  return (
    <div className={classes.root}>
      {buttons.map((button, idx) => (
        <button className={classes.button} type="button" href={button.url} key={idx}>
          {button.label}
        </button>
      ))}
    </div>
  )
}

PageButtons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
}

export default PageButtons
