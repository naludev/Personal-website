import styled, { keyframes } from 'styled-components'

export const LoopSliderWrapper = styled.div`
  .inner {
    display: flex;
    width: fit-content;
    animation-name: ${keyframes`
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    `};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: ${(props) => (props.reverse ? 'reverse' : 'normal')};
    animation-duration: ${(props) => `${props.duration}ms`};
  }
`
