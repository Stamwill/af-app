import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
// import { linkType } from 'utils'
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

const PageButtons = React.forwardRef(function PageButtons(props, ref) {
  const { className, ...other } = props
  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      {buttons.map((button, idx) => (
        <button key={idx} className={classes.button} type="button" href={button.url}>
          {button.label}
        </button>
      ))}
    </div>
  )
})

PageButtons.propTypes = {
  // buttons: PropTypes.arrayOf(linkType).isRequired,
  className: PropTypes.string,
}

export default PageButtons
