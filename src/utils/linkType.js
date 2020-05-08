import PropTypes from 'prop-types'

const linkType = PropTypes.shape({
	url: PropTypes.string.isRequired,
	label: PropTypes.string
})

export default linkType