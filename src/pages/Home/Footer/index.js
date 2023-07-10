/* eslint-disable max-len */
import React from 'react'
import PoweredByCoffee from 'assets/images/poweredbycoffee.png'
import { Container, StyledImage } from './styles'
import SocialMedia from '../Header/SocialMedia'

export const Footer = () => (
  <Container>
    <SocialMedia />
    <StyledImage src={PoweredByCoffee} alt="" />
  </Container>
)

export default Footer
