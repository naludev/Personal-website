import { fontSize, fontWeight } from 'app/globals/fonts'
import { colors } from 'app/globals/colors'

export const colorKeys = {
  PRIMARY: 'primary',
  WHITE: 'white',
  DISABLED: 'disabled',
  ERROR: 'error',
  SUCCESS: 'success',
  ACTIVE: 'active',
  SYMBOL: 'symbol',
  PAYMENT: 'payment',
  DEFAULT: ''
}

export const sizeKeys = {
  X_LARGE: 'xlarge',
  LARGE: 'large',
  SMALL: 'small',
  X_SMALL: 'xsmall',
  DEFAULT: ''
}

export const weightKeys = {
  BOLD: 'bold',
  SEMI_BOLD: 'semibold',
  LIGHT: 'light',
  DEFAULT: ''
}

export const getColor = {
  [colorKeys.PRIMARY]: colors.primary.regular,
  [colorKeys.WHITE]: colors.texts.white,
  [colorKeys.DEFAULT]: colors.texts.black
}

export const getSize = {
  [sizeKeys.X_LARGE]: fontSize.xlarge,
  [sizeKeys.LARGE]: fontSize.large,
  [sizeKeys.SMALL]: fontSize.small,
  [sizeKeys.X_SMALL]: fontSize.xsmall,
  [sizeKeys.DEFAULT]: fontSize.medium
}

export const getWeight = {
  [weightKeys.BOLD]: fontWeight.bold,
  [weightKeys.SEMI_BOLD]: fontWeight.semibold,
  [weightKeys.LIGHT]: fontWeight.light,
  [weightKeys.DEFAULT]: fontWeight.regular
}

export const textTypes = {
  subtitle1: { size: sizeKeys.X_LARGE },
  subtitle2: { size: sizeKeys.LARGE },
  body1: { size: sizeKeys.LARGE, weight: weightKeys.LIGHT },
  body2: { weight: weightKeys.LIGHT },
  button1: { size: sizeKeys.LARGE, weight: weightKeys.SEMI_BOLD },
  button2: { },
  button3: { weight: weightKeys.SEMI_BOLD },
  caption1: { size: sizeKeys.SMALL },
  caption2: { size: sizeKeys.SMALL, weight: weightKeys.LIGHT },
  overline: { size: sizeKeys.X_SMALL, weight: weightKeys.LIGHT }
}

export const defaults = {
  type: 'button2',
  color: '',
  size: '',
  weight: ''
}
