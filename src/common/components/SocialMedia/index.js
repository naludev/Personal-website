/* eslint-disable max-len */
import React from 'react'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { events, firebaseConfig } from 'app/utils/firebase'
import Icon from 'common/components/Icon'
import { SocialMediaContainer } from 'pages/Home/Header/styles'

export const SocialMedia = () => {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  return (
    <SocialMediaContainer>
      <a onClick={() => logEvent(analytics, events.SOCIAL_MEDIA_MAIL)} href="mailto:yannm.dev@gmail.com"><Icon icon="email" color="white" size="xsmall" /></a>
      <a onClick={() => logEvent(analytics, events.SOCIAL_MEDIA_INSTAGRAM)} href="https://www.instagram.com/yannswd/"><Icon icon="instagram" color="white" size="xsmall" /></a>
      <a onClick={() => logEvent(analytics, events.SOCIAL_MEDIA_LINKEDIN)} href="https://www.linkedin.com/in/yanndev/"><Icon icon="linkedin" color="white" size="xsmall" /></a>
      <a onClick={() => logEvent(analytics, events.SOCIAL_MEDIA_GITHUB)} href="https://github.com/yannxdxd"><Icon icon="github" color="white" size="xsmall" /></a>
    </SocialMediaContainer>
  )
}

export default SocialMedia
