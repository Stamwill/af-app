import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './PageButtons.module.css'

const buttons = [
  {
    label: '1',
    url: '#',
  },
  {
    label: '2',
    url: '#',
  },
  {
    label: '3',
    url: '#',
  },
  {
    label: '4',
    url: '#',
  },
  {
    label: '5',
    url: '#',
  },
  {
    label: '6',
    url: '#',
  },
  {
    label: '7',
    url: '#',
  },
  {
    label: '8',
    url: '#',
  },
  {
    label: '9',
    url: '#',
  },
  {
    label: '10',
    url: '#',
  },
]

function PageButtons(props) {
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
