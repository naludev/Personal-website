import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'common/components/Icon'
import Text from 'common/components/Text'
import { StyledLink } from './styles'

const ButtonLink = ({ text, onClick, icon, download }) => (
  <StyledLink download={download} href={onClick}>
    {icon && <Icon size="small" icon={icon} />}
    {text && <Text type="button1" text={text} />}
  </StyledLink>
)

ButtonLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.string,
  icon: PropTypes.string,
  download: PropTypes.any
}

export default ButtonLink
