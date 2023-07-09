import React from 'react'
import PropTypes from 'prop-types'
import { TagWrapper } from './styles'

const Tag = ({ text }) => (
  <TagWrapper>
    <span>#</span> {text}
  </TagWrapper>
)

Tag.propTypes = {
  text: PropTypes.string.isRequired
}

export default Tag
