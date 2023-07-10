import styled, { keyframes } from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background-color: ${colors.backgrounds.black};
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: -webkit-center;
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
  width: -webkit-fill-available;
`
export const TagList = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
`

export const LoopSliderWrapper = styled.div`
  .inner {
    display: flex;
    width: fit-content;
    animation-name: ${(props) => props.animation};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: ${(props) => (props.reverse ? 'reverse' : 'normal')};
    animation-duration: ${(props) => `${props.duration}ms`};
  }
`

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #50cb1f;
  border: 1px solid #50cb1f;
  font-size: 0.9rem;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 0 0.1rem 0.5rem rgb(0 0 0 / 30%),
    0 0.2rem 1.5rem rgb(0 0 0 / 40%);

  span {
    font-size: 1.2rem;
    color: #50cb1f;
  }

  @media (max-width: 425px) {
    gap: 0px 0.2rem;
    font-size: 8px;
    padding: 0.2rem 0.2rem;
    margin-right: 0.2rem;
  }
`

export const fadeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

export const Fade = styled.div`
  pointer-events: none;
  background: linear-gradient(90deg, rgb(0 0 0), transparent 30%, transparent 70%, rgb(0 0 0));
  position: absolute;
  inset: 0;
`
