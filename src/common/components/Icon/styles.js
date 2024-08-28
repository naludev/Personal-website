import styled, { css } from 'styled-components'
import { colors } from 'app/globals/colors'

const iconColors = {
  green: colors.primary.regular,
  white: colors.backgrounds.white,
  black: colors.texts.black,
  purple: colors.primary.secondary
}

export const sizes = {
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
    path {
      fill: ${iconColors[color]};
    }
  `}
`

export const ImageIcon = styled.img`
  --icon-size: ${({ size }) => (size ? sizes[size] : sizes.medium)};
  width: var(--icon-size);
  height: var(--icon-size);

  @media (max-width: 768px) {
   --icon-size: 1.5rem;
  }
`
