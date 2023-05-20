import styled, { css } from 'styled-components'
import { getColor, getSize, getWeight } from './helper'

export const textStyle = css`
  margin: 0;
  color: ${({ color }) => getColor[color]};
  ${({ weight }) => getWeight[weight]};
  ${({ size }) => getSize[size]};
`

export const StyledBody = styled.p`
  ${textStyle}  
`
