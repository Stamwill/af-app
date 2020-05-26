import * as React from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'
import { menuLinkType } from 'utils'
import classes from './AppDrawer.module.css'

const toggleScroll = (state) => {
  const body = document.body

  body.style.overflow = state
}

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const { menu, open, className, ...other } = props
  if (open) {
    toggleScroll('hidden')
  } else {
    toggleScroll()
  }

  return (
    <div
      className={classnames(classes.root, { [classes.menuIsOpen]: open }, className)}
      ref={ref}
      {...other}
    >
      <div className={classes.content}>
        {menu.map((menuItem, idx) => (
          <a key={idx} className={classes.burgerMenu} href={menuItem.url}>
            {menuItem.label}
          </a>
        ))}
      </div>
    </div>
  )
})

AppDrawer.propTypes = {
  menu: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
}

export default AppDrawer
