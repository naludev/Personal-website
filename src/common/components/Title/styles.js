import styled, { css } from 'styled-components'
import { fontWeight, fontSize } from 'app/globals/fonts'
import { colors } from 'app/globals/colors'

const StyledText = css`
  margin: 0;
  
  color: ${({ color }) => {
    switch (color) {
      case 'primary': return colors.primary.regular
      case 'secondary': return colors.primary.secondary
      case 'white': return colors.texts.white
      case 'contrast': return colors.primary.contrast
      default: return colors.texts.black
    }
  }};

  ${({ weight }) => {
    switch (weight) {
      case 'semibold': return fontWeight.semibold
      case 'xlight': return fontWeight.xlight
      case 'light': return fontWeight.light
      default: return fontWeight.regular
    }
  }};

  ${({ size }) => {
    switch (size) {
      case 'xxlarge': return fontSize.hxxlarge
      case 'xlarge': return fontSize.hxlarge
      case 'large': return fontSize.hlarge
      case 'small': return fontSize.hsmall
      case 'xsmall': return fontSize.hxsmall
      default: return fontSize.hmedium
    }
  }};

  @media (max-width: 425px) {
    &:first-child {
      font-size: 2vh;
    }
    &:last-child {
      font-size: 3vh;
    }
  }
`
export const H1 = styled.h1`
${StyledText};
`
export const H2 = styled.h2`
${StyledText};
`
export const H3 = styled.h3`
${StyledText};
`
export const H4 = styled.h4`
${StyledText};
`
export const H5 = styled.h5`
${StyledText};
`
export const H6 = styled.h6`
${StyledText};
`
