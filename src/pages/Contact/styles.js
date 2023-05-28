import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 0 2rem;
  background-color: ${colors.backgrounds.black};
`
