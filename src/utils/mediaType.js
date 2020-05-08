import PropTypes from 'prop-types'

const mediaType = PropTypes.shape({
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
})

export default mediaType