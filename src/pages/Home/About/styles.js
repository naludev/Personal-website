import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
text-align: -webkit-center;
padding: 0rem 15rem 0;

@media (max-width: 1063px) {
  text-align: -webkit-center;
  padding: 2rem 3rem 0;
}

@media (max-width: 768px) {
  padding: inherit;
}

@media (max-width: 425px) {
  h3 {
    font-size: 13px;
  }
  
  h4 {
    font-size: 12px;
  }
}
`

export const TitleContainer = styled.div`
  display: flex;
`

export const Content = styled.div`
  text-align: end;
  padding: 2rem;
  z-index: 1;
  width: inherit;

  @media (max-width: 1063px) {
    text-align: start;
  }
`

export const DescriptionContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
  }
`
