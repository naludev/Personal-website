/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'common/components/Icon'
import { StyledButton, StyledText } from './styles'

const Button = ({ icon, onClick, text, disabled, type, value }) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    type={type}
    value={value}
  >
    {icon && <Icon size="small" icon={icon} />}
    {text && <StyledText>{text}</StyledText>}
  </StyledButton>
)

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
}

export default Button
