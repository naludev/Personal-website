import { css } from 'styled-components'

export const WEIGHT = {
  xlight: 300,
  light: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}

export const BODY_SIZE = {
  xsmall: '0.625rem',
  small: '0.75rem',
  medium: '0.875rem',
  large: '1rem',
  xlarge: '1rem'
}

export const HEADING_SIZE = {
  xsmall: '1.25rem',
  small: '1.5rem',
  medium: '2.125rem',
  large: '4vh',
  xlarge: '3.625rem',
  xxlarge: '3rem'
}

export const xlight = css`font-weight: ${WEIGHT.xlight};`
export const light = css`font-weight: ${WEIGHT.light};`
export const regular = css`font-weight: ${WEIGHT.medium};`
export const semibold = css`font-weight: ${WEIGHT.semibold};`
export const bold = css`font-weight: ${WEIGHT.bold};`

export const fontWeight = {
  xlight,
  light,
  regular,
  semibold,
  bold
}

export const xsmall = css`font-size: ${BODY_SIZE.xsmall};`
export const small = css`font-size: ${BODY_SIZE.small};`
export const medium = css`font-size: ${BODY_SIZE.medium};`
export const large = css`font-size: ${BODY_SIZE.large};`
export const xlarge = css`font-size: ${BODY_SIZE.xlarge};`

export const hxsmall = css`font-size: ${HEADING_SIZE.xsmall};`
export const hsmall = css`font-size: ${HEADING_SIZE.small};`
export const hmedium = css`font-size: ${HEADING_SIZE.medium};`
export const hlarge = css`font-size: ${HEADING_SIZE.large};`
export const hxlarge = css`font-size: ${HEADING_SIZE.xlarge};`
export const hxxlarge = css`font-size: ${HEADING_SIZE.xxlarge};`

export const fontSize = {
  xsmall,
  small,
  medium,
  large,
  xlarge,
  hxsmall,
  hsmall,
  hmedium,
  hlarge,
  hxlarge,
  hxxlarge
}
