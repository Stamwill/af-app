import PropTypes from 'prop-types'
import mediaType from './mediaType'

const cardType = PropTypes.shape({
	image: mediaType,
	title: PropTypes.string,
	text: PropTypes.string
})

export default cardType