import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { articleType } from 'utils'
import classes from './ArticleItem.module.css'

const ArticleItem = React.forwardRef(function ArticleItem(props, ref) {
  const { className, article, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <img className={classes.img} src="//source.unsplash.com/407x270?hiking" alt="" />

      <div className={classes.articleInfo}>
        <h3 className={classes.category}>{article.category}</h3>

        <span>|</span>

        <p className={classes.readTime}>{article.readTime}</p>
      </div>

      <h2 className={classes.heading}>{article.title}</h2>

      <p className={classes.paragraph}>{article.text}</p>
    </div>
  )
})

ArticleItem.propTypes = {
  article: articleType.isRequired,
  className: PropTypes.string,
}

ArticleItem.uiName = 'ArticleItem'

export default ArticleItem