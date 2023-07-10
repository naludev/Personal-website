/* eslint-disable max-len */
import React from 'react'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { events, firebaseConfig } from 'app/utils/firebase'
import Text from 'common/components/Text/index'
import ButtonLink from 'common/components/Button/ButtonLink'
import NeonTitle from 'common/components/NeonTitle'
import Title from 'common/components/Title'
import CV from 'assets/yann_developer_cv.pdf'
import Me from 'assets/images/meonpc.png'
import { ButtonsContainer, Container, Footer, StyledSpan, HeaderTitle, ContainerTitle, TextContainer, StyledImage } from './styles'
import { SocialMedia } from './SocialMedia'
import BackgroundParticles from './Particles'

export const Header = () => {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  return (
    <>
      <div>
        <BackgroundParticles />
      </div>
      <Container>
        <Title type="h6" color="contrast" text="WEB UI DEVELOPER | MOBILE DEVELOPER | FULL STACK DEVELOPER" />
        <ContainerTitle>
          <HeaderTitle>
            <StyledSpan className="wave">👋🏻</StyledSpan>
            <NeonTitle type="h3" color="secondary" text="Hey! I am Yann" />
          </HeaderTitle>
          <StyledImage src={Me} alt="" />
        </ContainerTitle>
        <TextContainer>
          <Text color="white" type="subtitle1" text="I am a software developer based in Uruguay, very passionate and dedicated to my work. If you have a project or creative need I can help you with, please contact me." />
        </TextContainer>
        <Footer>
          <ButtonsContainer>
            <ButtonLink onClick={logEvent(analytics, events.HIRE_ME)} href="https://www.linkedin.com/in/yanndev/" icon="touch" text="Hire me" />
            <ButtonLink onClick={logEvent(analytics, events.DOWNLOAD_RESUME)} href={CV} download="yann_dev_cv" icon="download" text="Download my resume" />
          </ButtonsContainer>
          <SocialMedia />
        </Footer>
      </Container>
    </>
  )
}

export default Header
