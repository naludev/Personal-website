import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.primary.secondary};
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardsContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5,1fr);
  justify-items: center;
  margin: 1rem 0 1rem 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
