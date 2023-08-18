import styled, { keyframes } from 'styled-components'

export const StyledImage = styled.img`
  max-width: 60vh;
  padding: 1em;

  @media (max-width: 425px) {
    max-width: 40vh;
  }  
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-align: -webkit-center;
  padding: 9rem 2rem 0 2rem;

  @media (max-width: 425px) {
    text-align: -webkit-center;
    padding: 6rem 1rem 0 1rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
`

export const Footer = styled.div`
  align-items: end;
  padding: 1rem;
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
  flex-direction: row;

  @media (max-width: 1063px) {
    flex-direction: row;
  }

  @media (max-width: 558px) {
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
  font-size: 3rem;

  @media (max-width: 425px) {
    font-size: 3.5vh;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 55ch;

  @media (max-width: 1063px) {
    width: inherit;
    align-items: center;
    padding: 0 8vw 0px 8vw;

  }
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const SocialMediaContainer = styled.div`
  gap: 10px;
  align-items: center;
  align-self: center;
  display: inherit;
  justify-content: center;
  margin-top: 1rem;
`
