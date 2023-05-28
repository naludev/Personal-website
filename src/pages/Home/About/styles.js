import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.backgrounds.black};
  justify-content: center;
  padding: 2rem;

  @media (max-width: 425px) {
    display: inherit;
    flex-direction: column;
    padding: 1rem;
  }
`

export const FooterContainer = styled.div`
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const TitleContainer = styled.div`
  display: flex;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`

export const StyledImage = styled.img`
  width: 60%;
  height: auto;
`

export const LineContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 4rem;

  @media (max-width: 425px) {
    position: absolute;
    width: 77%;
    margin-top: 22rem;
  }
`

export const Line = styled.div`
  height: 2rem;
`

export const Content = styled.div`
  align-self: center;
  text-align: center;
  z-index: 1;
`

export const DescriptionContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
