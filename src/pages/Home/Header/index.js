/* eslint-disable max-len */
import React from 'react'
import Text from 'common/components/Text/index'
import CV from 'assets/Nalu_Developer_CV.pdf'
import Me from 'assets/images/me2.png'
import SocialMedia from 'common/components/SocialMedia'
import BackgroundParticles from 'common/components/Particles/Particles'
import ButtonLink from 'common/components/Button/ButtonLink'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { events, firebaseConfig } from 'app/utils/firebase'
import { initializeApp } from 'firebase/app'
import Title from 'common/components/Title'
import { Container, StyledSpan, StyledImage, Footer, ButtonsContainer, Content, ContainerTitle, HeaderTitle, ContentContainer } from './styles'

export const Header = () => {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  return (
    <>
      <div>
        <BackgroundParticles />
      </div>
      <Container>
        <Content>
          <StyledImage src={Me} alt="" />
          <ContentContainer>
            <ContainerTitle>
              <Title type="h6" color="secondary" text="WEB UI | MOBILE | FULL STACK" />
              <HeaderTitle>
                <StyledSpan className="wave">👋🏻</StyledSpan>
                <Title type="h3" color="contrast" text="Hi! My name is Nalú" />
              </HeaderTitle>
              <Text color="white" type="body2" text="Unlocking your business potential! Experience, expertise and innovation in software solutions. Let's achieve greatness together!" />
            </ContainerTitle>
            <Footer>
              <ButtonsContainer>
                <ButtonLink onClick={logEvent(analytics, events.HIRE_ME)} href="https://www.linkedin.com/in/naludev/" icon="touch" text="Hire me" />
                <ButtonLink onClick={logEvent(analytics, events.DOWNLOAD_RESUME)} href={CV} download="yann_dev_cv" icon="download" text="Download my resume" />
              </ButtonsContainer>
              <SocialMedia />
            </Footer>
          </ContentContainer>
        </Content>
      </Container>
    </>
  )
}

export default Header
