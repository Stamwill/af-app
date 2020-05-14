import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './ArticlePage.module.css'

const buttons = Array.from(new Array(9), (_, idx) => ({
  label: idx + 1,
  url: '#',
}))

const ArticlePage = React.forwardRef(function ArticlePage(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.pageButton}>
        {buttons.map((button, idx) => (
          <button key={idx} className={classes.button} type="button" href={button.url}>
            {button.label}
          </button>
        ))}
      </div>

      <div className={classes.switchPage}>
        <a href="/">
          <p className={classes.previous}>Previous</p>
        </a>

        <span className={classes.span}>|</span>

        <a href="/">
          <p className={classes.next}>Next</p>
        </a>
      </div>
    </div>
  )
})

ArticlePage.propTypes = {
  className: PropTypes.string,
}

ArticlePage.uiName = 'ArticlePage'

export default ArticlePage
