import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { articleType } from 'utils'
import PageButtons from 'components/PageButtons'
import ArticleItem from 'containers/ArticleItem'
import classes from './Home.module.css'

const Home = React.forwardRef(function Home(props, ref) {
  const { className, articles, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <PageButtons />

      <div className={classes.list}>
        {articles.map((article, idx) => (
          <ArticleItem key={idx} article={article} />
        ))}
      </div>
    </div>
  )
})

Home.propTypes = {
  articles: PropTypes.arrayOf(articleType).isRequired,
  className: PropTypes.string,
}

Home.uiName = 'Home'

export default Home
