import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'common/components/Icon'
import { StyledLink, StyledText } from './styles'

const ButtonLink = ({ text, onClick, icon, download, href }) => (
  <StyledLink download={download} onClick={onClick} href={href}>
    {icon && <Icon size="small" color="purple" icon={icon} />}
    {text && <StyledText>{text}</StyledText>}
  </StyledLink>
)

ButtonLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  icon: PropTypes.string,
  download: PropTypes.any
}

export default ButtonLink
