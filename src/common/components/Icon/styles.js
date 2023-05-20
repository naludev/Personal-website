import styled, { css } from 'styled-components'
import { colors } from 'app/globals/colors'

const iconColors = {
  green: colors.primary.regular,
  white: colors.backgrounds.white,
  black: colors.texts.black
}
const sizes = {
  xsmall: '1.25rem',
  small: '1rem',
  medium: '2.125rem',
  large: '3rem',
  xlarge: '3.625rem',
  xxlarge: '6rem'
}

export const StyledIcon = styled.div`
  --icon-size: ${({ size }) => (size ? sizes[size] : sizes.medium)};
  width: var(--icon-size);
  height: var(--icon-size);
  ${({ color }) => color && css`
    path{
        fill: ${iconColors[color]}
    }
  `}
`
