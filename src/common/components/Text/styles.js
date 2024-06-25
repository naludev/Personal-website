import styled, { css } from 'styled-components'
import { getColor, getSize, getWeight } from './helper'

export const textStyle = css`
  margin: 0;
  color: ${({ color }) => getColor[color]};
  ${({ weight }) => getWeight[weight]};
  ${({ size }) => getSize[size]};

  @media (max-width: 425px) {
    font-size: 13px;
  }  
`

export const StyledBody = styled.p`
  ${textStyle}  
`
