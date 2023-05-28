import styled, { keyframes } from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9rem 2rem 0 2rem;
  background-color: ${colors.backgrounds.black};

  @media (max-width: 425px) {
    text-align: -webkit-center;
    padding: 6rem 1rem 0 2rem;
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
`

export const ButtonsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  width: 70%;
  text-align-last: center;

  @media (max-width: 425px) {
    width: inherit;
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
  gap: 15px;
  display: flex;
  align-items: center;
`

export const SocialMediaContainer = styled.div`
  gap: 10px;
  align-items: center;
  align-self: center;
  display: inherit;
  justify-content: center;
  margin-top: 1rem;
`
