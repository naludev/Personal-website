import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
text-align: -webkit-center;
padding: 2rem 15rem 0;

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
  width: 100%;

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

export const TimelineContainer = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  max-height: ${(props) => (props.expanded ? 'none' : '300px')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.expanded ? '1' : '0.9')};
`

export const CentralLine = styled.div`
  position: absolute;
  left: 8.5%;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: ${colors.primary.regular};
  transform: translateX(-50%);
`

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
  padding: 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -2%;
    top: 10px;
    width: 15px;
    height: 15px;
    background-color: ${colors.primary.regular};
    border-radius: 50%;
    transform: translateX(-50%);
  }
`

export const ItemCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: rgb(80, 203, 31);
`

export const ItemTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: ${colors.texts.white};
`

export const ItemSubtitle = styled.h4`
  margin: 5px 0;
  padding: 0;
  font-size: 1rem;
  color: rgb(137, 79, 255);
`

export const ItemDetails = styled.div`
  margin: 0;
  padding: 0;
  color: ${colors.texts.white};
  font-size: 13px;
  line-height: 1.5;

  @media (max-width: 425px) {
    font-size: 10px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: margin-top 1s ease-in-out;
`
