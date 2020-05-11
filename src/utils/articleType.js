import PropTypes from 'prop-types'
import mediaType from './mediaType'

const articleType = PropTypes.shape({
  image: mediaType.isRequired,
  category: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
})

export default articleType
