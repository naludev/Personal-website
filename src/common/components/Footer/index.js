/* eslint-disable max-len */
import React from 'react'
import PoweredByCoffee from 'assets/images/poweredbycoffee.png'
import SocialMedia from 'common/components/SocialMedia'
import { Container, StyledImage } from './styles'

export const Footer = () => (
  <Container>
    <SocialMedia />
    <StyledImage src={PoweredByCoffee} alt="" />
  </Container>
)

export default Footer
