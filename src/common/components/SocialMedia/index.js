/* eslint-disable max-len */
import React from 'react'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { events, firebaseConfig } from 'app/utils/firebase'
import Icon from 'common/components/Icon'
import { SocialMediaContainer, StyledLink } from './styles'

export const SocialMedia = () => {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  return (
    <SocialMediaContainer>
      <StyledLink onClick={() => logEvent(analytics, events.SOCIAL_MEDIA_MAIL)} href="mailto:nalum.dev@gmail.com"><Icon icon="email" color="white" size="xsmall" /></StyledLink>
      <StyledLink onClick={() => logEvent(analytics, events.SOCIAL_MEDIA_LINKEDIN)} href="https://www.linkedin.com/in/naludev/"><Icon icon="linkedin" color="white" size="xsmall" /></StyledLink>
      <StyledLink onClick={() => logEvent(analytics, events.SOCIAL_MEDIA_GITHUB)} href="https://github.com/naludev"><Icon icon="github" color="white" size="xsmall" /></StyledLink>
    </SocialMediaContainer>
  )
}

export default SocialMedia
