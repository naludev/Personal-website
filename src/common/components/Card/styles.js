import styled from 'styled-components'

const Container = styled.div`
  border-radius: 3px;
  border: 1px dashed;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 320px) {
    margin: 4px auto;
    align-items: center;
  }

  @media (min-width: 321px) and (max-width: 768px) {
    max-width: 348px;
    margin: 4px auto;
    align-items: center;
  }
`

const Content = styled.div`
  width: inherit;
  margin-top: 1rem;
`

const StyledImage = styled.img`
  width: 45vh;

  @media (max-width: 320px) {
    width: 18vh;
  }

  @media (min-width: 321px) and (max-width: 425px) {
    width: 34vh;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 40vh;
  }
`

export { Container, Content, StyledImage }
