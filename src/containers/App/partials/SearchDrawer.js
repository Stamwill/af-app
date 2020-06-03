import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './SearchDrawer.module.css'

const SearchDrawer = React.forwardRef(function SearchDrawer(props, ref) {
  const { onToggle, open, className, ...other } = props

  const inputRef = React.useRef(null)

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  if (open) {
    onToggle(true)
  } else {
    onToggle()
  }

  return (
    <div
      className={classnames(classes.root, { [classes.searchIsOpen]: open }, className)}
      ref={ref}
      {...other}
    >
      <div className={classes.content}>
        <header className={classes.heading} />
        <input
          className={classes.input}
          type="text"
          placeholder="Type to search..."
          ref={inputRef}
        />
      </div>
    </div>
  )
})

SearchDrawer.propTypes = {
  open: PropTypes.bool,
  onToggle: PropTypes.func,
  className: PropTypes.string,
}

SearchDrawer.uiName = 'SearchDrawer'

export default SearchDrawer
