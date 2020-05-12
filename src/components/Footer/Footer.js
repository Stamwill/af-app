import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { menuLinkType } from 'utils'
import facebook from './facebook.png'
import instagram from './instagram.png'
import classes from './Footer.module.css'

const Footer = React.forwardRef(function Footer(props, ref) {
  const { menus, className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div>
        <img src="//source.unsplash.com/50x50?bear" alt="" />
      </div>

      <div className={classes.container}>
        <ul>
          <div className={classes.menu}>
            {menus.map((menu, idx) => (
              <a key={idx} className={classes.menu} href={menu.url}>
                <span>{menu.label}</span>
              </a>
            ))}
          </div>
        </ul>

        <ul className={classes.shop}>
          <a href="/">shop at af.eu </a>
        </ul>

        <div className={classes.test}>
          <ul className={classes.socialMedia}>
            <a href="/">
              <img className={classes.logo} src={facebook} alt="" />
              <h5>Facebook</h5>
            </a>
            <a href="/">
              <img className={classes.logo} src={instagram} alt="" />
              <h5>Instagram</h5>
            </a>
          </ul>
        </div>
      </div>
      <div>
        <img src="//source.unsplash.com/50x50?bear" alt="" />
      </div>
    </div>
  )
})

Footer.propTypes = {
  menus: PropTypes.arrayOf(menuLinkType).isRequired,
  className: PropTypes.string,
}

Footer.uiName = 'Footer'

export default Footer
