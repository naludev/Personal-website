import PropTypes from 'prop-types'
import { icons } from './helper'
import { StyledIcon } from './styles'

const Icon = ({ icon, color, size }) => {
  const iconComp = icons[icon]
  return (
    <StyledIcon
      as={iconComp}
      color={color}
      size={size}
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Icon
