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
      <div className={classes.companyLogo}>
        <img className={classes.companyImg} src="companyLogo.png" alt="" />
      </div>

      <div className={classes.container}>
        <ul className={classes.menu}>
          {menus.map((menu, idx) => (
            <a key={idx} className={classes.menu} href={menu.url}>
              <span>{menu.label}</span>
            </a>
          ))}
        </ul>

        <ul className={classes.shop}>
          <a href="/">shop at af.eu </a>
        </ul>

        <ul className={classes.socialMedia}>
          <a href="/">
            <img className={classes.logo} src={facebook} alt="" />

            <h5 className={classes.heading}>Facebook</h5>
          </a>
          <a href="/">
            <img className={classes.logo} src={instagram} alt="" />

            <h5 className={classes.heading}>Instagram</h5>
          </a>
        </ul>
      </div>
      <div className={classes.brand}>
        <img className={classes.companyImg} src="companyLogo.png" alt="" />
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
