/* eslint-disable max-len */
import React from 'react'
import PoweredByCoffee from 'assets/images/poweredbycoffee.png'
import SocialMedia from 'common/components/SocialMedia'
import Text from 'common/components/Text'
import { Container, StyledImage } from './styles'

export const Footer = () => (
  <Container>
    <SocialMedia />
    <StyledImage src={PoweredByCoffee} alt="" />
    <Text text="Ⓐ 𝟚𝟘𝟚𝟛 𝕠𝕡𝕖𝕟 𝕤𝕠𝕦𝕣𝕔𝕖" type="overline" color="white" />
  </Container>
)

export default Footer
