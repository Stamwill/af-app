import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import classes from './ArticleListPagination.module.css'

const buttons = Array.from(new Array(9), (_, idx) => ({
  label: idx + 1,
  url: '#',
}))

const ArticleListPagination = React.forwardRef(function ArticleListPagination(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <h2 className={classes.emptyHeading}> </h2>
      <div className={classes.pageButton}>
        {buttons.map((button, idx) => (
          <button key={idx} className={classes.button} type="button" href={button.url}>
            {button.label}
          </button>
        ))}
      </div>

      <div className={classes.switchPage}>
        <button className={classes.previous} type="button">
          Previous
        </button>

        <span className={classes.span}>|</span>

        <button className={classes.next} type="button">
          Next
        </button>
      </div>
    </div>
  )
})

ArticleListPagination.propTypes = {
  className: PropTypes.string,
}

ArticleListPagination.uiName = 'ArticleListPagination'

export default ArticleListPagination
