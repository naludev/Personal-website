import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgrounds.black};
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 2rem;
`

export const StyledImage = styled.img`
  max-width: 20vh;
`
