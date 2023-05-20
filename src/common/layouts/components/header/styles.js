import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 1rem;
`

export const Links = styled.div`
  display: flex;
  text-align: -webkit-center;
`

export const Head = styled.header`
  justify-content: center;
  padding: 1rem;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: ${colors.backgrounds.black};
  box-shadow: 0px -4px 17px -4px ${colors.primary.regular};
  grid-area: header;
`
