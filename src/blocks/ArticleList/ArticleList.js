import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { articleType } from 'utils'
import ArticleItem from 'containers/ArticleItem'
import Section from 'components/Section'
import ArticleListPagination from './partials/ArticleListPagination'
import classes from './ArticleList.module.css'

const ArticleList = React.forwardRef(function ArticleList(props, ref) {
  const { className, articles, ...other } = props

  return (
    <Section className={classnames(classes.root, className)} ref={ref} {...other}>
      <ArticleListPagination className={classes.pagination} />

      <div className={classes.list}>
        {articles.map((article, idx) => (
          <ArticleItem key={idx} article={article} />
        ))}
      </div>
    </Section>
  )
})

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(articleType).isRequired,
  className: PropTypes.string,
}

ArticleList.uiName = 'ArticleList'

export default ArticleList
