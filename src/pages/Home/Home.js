import * as React from 'react'
import PropTypes from 'prop-types'
import { articleType, menuLinkType } from 'utils'
import ArticleList from 'blocks/ArticleList'
import Hero from 'blocks/Hero'
// import classes from './Home.module.css'

function Home(props) {
  const { menu, articles } = props

  return (
    <>
      <Hero menu={menu} />
      <ArticleList articles={articles} />
    </>
  )
}

Home.propTypes = {
  articles: PropTypes.arrayOf(articleType).isRequired,
  menu: PropTypes.arrayOf(menuLinkType).isRequired,
}

Home.uiName = 'Home'

export default Home
