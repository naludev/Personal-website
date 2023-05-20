import React from 'react'
import PropTypes from 'prop-types'
import { defaults, textTypes } from './helper'
import { StyledBody } from './styles'

const Text = ({ text, type, color }) => (
  <StyledBody {...textTypes[type]} color={color}>{text}</StyledBody>
)

Text.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string
}

Text.defaultProps = {
  color: defaults.color,
  type: defaults.type,
  text: ''
}

export default Text
