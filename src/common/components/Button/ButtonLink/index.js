import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'common/components/Icon'
import { StyledLink, StyledText } from './styles'

const ButtonLink = ({ text, onClick, icon, download }) => (
  <StyledLink download={download} href={onClick}>
    {icon && <Icon size="small" icon={icon} />}
    {text && <StyledText>{text}</StyledText>}
  </StyledLink>
)

ButtonLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.string,
  icon: PropTypes.string,
  download: PropTypes.any
}

export default ButtonLink
