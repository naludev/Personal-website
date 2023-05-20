import styled from 'styled-components'
import { colors } from 'app/globals/colors'

export const Container = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 0 2rem;
  background-color: ${colors.primary.secondary};
`

export const Animation = styled.img`
  width: 4rem;
  margin-left: 0.5rem;
`

export const ContainerTitle = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: -webkit-center;
  padding: 2rem;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 2rem;
`
