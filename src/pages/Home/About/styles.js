import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.primary.secondary};
  justify-content: center;
  padding: 2rem;
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
`

export const StyledImage = styled.img`
  width: 60%;
  height: auto;
`

export const LineContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 4rem;
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
