import { colors } from 'app/globals/colors'
import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: overlay;
  background-color: ${colors.backgrounds.black}
`
