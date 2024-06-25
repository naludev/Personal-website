/* eslint-disable max-len */
import React from 'react'
import Text from 'common/components/Text/index'
import CV from 'assets/cv.pdf'
import Me from 'assets/images/me2.png'
import SocialMedia from 'common/components/SocialMedia'
import BackgroundParticles from 'common/components/Particles/Particles'
import ButtonLink from 'common/components/Button/ButtonLink'
import Title from 'common/components/Title'
import { Container, StyledSpan, StyledImage, Footer, ButtonsContainer, Content, ContainerTitle, HeaderTitle, HeaderBody, ContentContainer } from './styles'

export const Header = () => (
  <>
    <div>
      <BackgroundParticles />
    </div>
    <Container>
      <Content>
        <StyledImage src={Me} alt="" />
        <ContentContainer>
          <ContainerTitle>
            <Title type="h6" color="secondary" text="WEB & MOBILE DEVELOPER" />
            <HeaderTitle>
              <StyledSpan className="wave">👋🏻</StyledSpan>
              <Title type="h3" color="contrast" text="Hi! My name is Nalú" />
            </HeaderTitle>
            <HeaderBody>
              <Text color="white" type="body2" text="Unlocking your business potential! Experience, expertise and innovation in software solutions. Let's achieve greatness together!" />
            </HeaderBody>
          </ContainerTitle>
          <Footer>
            <ButtonsContainer>
              <ButtonLink href="https://www.linkedin.com/in/naludev/" icon="touch" text="Hire me" />
              <ButtonLink href={CV} download="nalu_dev_cv" icon="download" text="Download my resume" />
            </ButtonsContainer>
            <SocialMedia />
          </Footer>
        </ContentContainer>
      </Content>
    </Container>
  </>
)

export default Header
