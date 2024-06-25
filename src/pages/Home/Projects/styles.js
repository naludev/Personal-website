import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
-webkit-box-pack: center;
justify-content: center;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
padding: 2rem 15rem;
`

export const Content = styled.div`
  padding: 0 2rem;
  z-index: 1;
  width: 100%;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`
