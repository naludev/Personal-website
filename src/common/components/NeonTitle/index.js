import React from 'react'
import PropTypes from 'prop-types'
import { H1, H2, H3, H4, H5, H6 } from './styles'

const NeonTitle = ({ text, type, color }) => {
  switch (type) {
    case 'h2':
      return (
        <H2 size="xlarge" weight="xlight" color={color}>{text}</H2>
      )
    case 'h3':
      return (
        <H3 size="large" weight="xlight" color={color}>{text}</H3>
      )
    case 'h4':
      return (
        <H4 weight="light" color={color}>{text}</H4>
      )
    case 'h5':
      return (
        <H5 size="small" weight="medium" color={color}>{text}</H5>
      )
    case 'h6':
      return (
        <H6 size="xsmall" weight="semibold" color={color}>{text}</H6>
      )
    default:
      return (
        <H1 size="xxlarge" weight="xlight" color={color}>{text}</H1>
      )
  }
}

NeonTitle.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string
}

export default NeonTitle
