import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
padding: 2rem 15rem;

@media (max-width: 768px) {
  padding: inherit;
}
`

export const Content = styled.div`
  padding: 0 2rem;
  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
  text-align: -webkit-center;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`
