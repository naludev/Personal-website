import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  transition: 300ms ease;
  position: relative;
  grid-template-areas:
    'nav header'
    'nav page';
`

export const Page = styled.div`
  grid-area: page;
  background-color: ${colors.primary.background};
`
