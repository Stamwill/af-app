import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

function Navigation(props) {
  const { menu } = props
  return (
    <div>
      {menu.map((menu, idx) => (
        <Button type="button" key={idx} url={menu.url}>
          {menu.label}
        </Button>
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
