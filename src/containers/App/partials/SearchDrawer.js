import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './SearchDrawer.module.css'

const SearchDrawer = React.forwardRef(function SearchDrawer(props, ref) {
  const { open, className, ...other } = props

  return (
    <div
      className={classnames(classes.root, { [classes.searchIsOpen]: open }, className)}
      ref={ref}
      {...other}
    >
      <div className={classes.content}>
        <header className={classes.heading} />
        <input className={classes.input} placeholder="Type to search..." />
        <span className={classes.inputButton}> > </span>
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
