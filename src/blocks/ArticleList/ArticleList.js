import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import ArticleListPagination from './partials/ArticleListPagination'
import classes from './ArticleList.module.css'

const ArticleList = React.forwardRef(function ArticleList(props, ref) {
  const { className, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <ArticleListPagination />
    </div>
  )
})

ArticleList.propTypes = {
  className: PropTypes.string,
}

ArticleList.uiName = 'ArticleList'

export default ArticleList
