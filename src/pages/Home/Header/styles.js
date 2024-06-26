import styled, { keyframes } from 'styled-components'

export const StyledImage = styled.img`
width: 100%;
height: 300px;
object-fit: contain;
object-position: top;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-align: -webkit-center;
  padding: 4rem 2rem 0 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 0 1rem;
  }

  @media (max-width: 425px) {
    text-align: -webkit-center;
    padding: 4rem 1rem 0 1rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
`

export const Footer = styled.div`
  align-items: end;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    align-items: inherit;
    align-items: center;
  }

  @media (max-width: 1063px) {
    align-items: center;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1063px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80vh;
  }
`

export const Animation = styled.img`
  width: 4rem;
  margin-left: 0.5rem;
`

const waveanimation = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
`

export const StyledSpan = styled.span`
  animation-name: ${waveanimation};  
  animation-duration: 2.5s;       
  animation-iteration-count: infinite; 
  transform-origin: 70% 70%;      
  display: inline-block;
  font-size: 2rem;

  @media (max-width: 425px) {
    font-size: 3.5vh;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-end;
  width: 55ch;

  @media (max-width: 1063px) {
    width: inherit;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: inherit;
    align-items: center;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`
export const HeaderBody = styled.div`
  text-align: end;


  @media (max-width: 1063px) {
    text-align: center;
  }

  @media (max-width: 375px) {
    padding: 0 1rem;
  }

  @media (max-width: 320px) {
    padding: 0 2rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`
