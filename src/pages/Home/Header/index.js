/* eslint-disable max-len */
import React from 'react'
import Text from 'common/components/Text/index'
import ButtonLink from 'common/components/Button/ButtonLink'
import NeonTitle from 'common/components/NeonTitle'
import Title from 'common/components/Title'
import { ButtonsContainer, Container, Footer, StyledSpan, ContainerTitle, TextContainer } from './styles'
import { SocialMedia } from './SocialMedia'

export const Header = () => (
  <Container>
    <Title type="h6" color="contrast" text="WEB UI DEVELOPER | MOBILE DEVELOPER | FULL STACK DEVELOPER" />
    <ContainerTitle>
      <StyledSpan className="wave">👋🏻</StyledSpan>
      <NeonTitle type="h3" color="secondary" text="Hey! I am Yann" />
    </ContainerTitle>
    <TextContainer>
      <Text color="white" type="subtitle1" text="I am a software developer based in Uruguay, very passionate and dedicated to my work. If you have a project or creative need I can help you with, please contact me." />
    </TextContainer>
    <Footer>
      <ButtonsContainer>
        <ButtonLink onClick="https://www.linkedin.com/in/yanndev/" icon="touch" text="Hire me" />
        <ButtonLink onClick="https://www.instagram.com/yannswd/" icon="download" type="button" text="Download my resume" />
      </ButtonsContainer>
      <SocialMedia />
    </Footer>
  </Container>
)

export default Header
