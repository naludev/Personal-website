/* eslint-disable max-len */
import React from 'react'
import Icon from 'common/components/Icon'
import { SocialMediaContainer, StyledLink } from './styles'

export const SocialMedia = () => (
  <SocialMediaContainer>
    <StyledLink href="mailto:nalum.dev@gmail.com"><Icon icon="email" color="white" size="xsmall" /></StyledLink>
    <StyledLink href="https://www.linkedin.com/in/naludev/"><Icon icon="linkedin" color="white" size="xsmall" /></StyledLink>
    <StyledLink href="https://github.com/naludev"><Icon icon="github" color="white" size="xsmall" /></StyledLink>
  </SocialMediaContainer>
)

export default SocialMedia
