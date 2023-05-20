/* eslint-disable max-len */
import React from 'react'
import Icon from 'common/components/Icon'
import { SocialMediaContainer } from '../styles'

export const SocialMedia = () => (
  <SocialMediaContainer>
    <a href="mailto:yannm.dev@gmail.com"><Icon icon="email" color="white" size="xsmall" /></a>
    <a href="https://www.instagram.com/yannswd/"><Icon icon="instagram" color="white" size="xsmall" /></a>
    <a href="https://www.linkedin.com/in/yanndev/"><Icon icon="linkedin" color="white" size="xsmall" /></a>
  </SocialMediaContainer>
)

export default SocialMedia
