import { colors } from 'app/globals/colors'
import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem 0 2rem;
  background: ${colors.backgrounds.black};

  @media (max-width: 425px) {
    padding: 1rem 2rem 0px;
  }

  @media (max-width: 1063px) {
    padding: 2rem 2rem 0px;
  }
`
