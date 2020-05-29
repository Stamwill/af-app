import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './SearchDrawer.module.css'

const toggleScroll = (state = 'auto') => {
  const body = document.body.style

  body.overflow = state
}
const SearchDrawer = React.forwardRef(function SearchDrawer(props, ref) {
  const { open, className, ...other } = props

  if (open) {
    toggleScroll('hidden')
  } else {
    toggleScroll()
  }

  return (
    <div
      className={classnames(classes.root, { [classes.searchIsOpen]: open }, className)}
      ref={ref}
      {...other}
    >
      <div className={classes.content}>
        <header className={classes.heading} />

        <input className={classes.input} placeholder="Type to search..." />
      </div>
    </div>
  )
})

SearchDrawer.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
}

SearchDrawer.uiName = 'SearchDrawer'

export default SearchDrawer
