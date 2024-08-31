/* eslint-disable max-len */
import React from 'react'
import Text from 'common/components/Text'
import CV from 'assets/nalu_dev_cv.pdf'
import Me from 'assets/images/me2.png'
import SocialMedia from 'common/components/SocialMedia'
import BackgroundParticles from 'common/components/Particles/Particles'
import ButtonLink from 'common/components/Button/ButtonLink'
import Title from 'common/components/Title'
import { Container, StyledSpan, StyledImage, Footer, ButtonsContainer, Content, ContainerTitle, HeaderTitle, HeaderBody, ContentContainer } from './styles'
import { headerTexts } from './helper'

const Header = () => (
  <>
    <BackgroundParticles />
    <Container>
      <Content>
        <StyledImage src={Me} alt="Profile" />
        <ContentContainer>
          <ContainerTitle>
            <Title type="h6" color="secondary" text={headerTexts.title} />
            <HeaderTitle>
              <StyledSpan className="wave">{headerTexts.waveEmoji}</StyledSpan>
              <Title type="h3" color="contrast" text={headerTexts.greeting} />
            </HeaderTitle>
            <HeaderBody>
              <Text color="white" type="body2" text={headerTexts.description} />
            </HeaderBody>
          </ContainerTitle>
          <Footer>
            <ButtonsContainer>
              <ButtonLink href={headerTexts.linkedinUrl} icon="touch" text={headerTexts.hireMe} />
              <ButtonLink href={CV} download={headerTexts.resumeFileName} icon="download" text={headerTexts.downloadResume} />
            </ButtonsContainer>
            <SocialMedia />
          </Footer>
        </ContentContainer>
      </Content>
    </Container>
  </>
)

export default Header
