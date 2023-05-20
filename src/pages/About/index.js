import React from 'react'
import { Chrono } from 'react-chrono'
import NeonTitle from 'common/components/NeonTitle'
import Text from 'common/components/Text'
import Icon from 'common/components/Icon'
import { Container, ContainerTitle, Footer } from './styles'
import { items } from './helper'

const Contact = () => (
  <Container>
    <ContainerTitle>
      <NeonTitle type="h3" color="secondary" text="About me" />
    </ContainerTitle>
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      cardHeight={200}
      slideShow
      enableDarkToggle
      hideControls
      disableClickOnCircle
      disableNavOnKey
      theme={{
        cardBgColor: '#151515',
        cardForeColor: 'white',
        primary: '#a80099',
        secondary: '#101010',
        textColor: 'white',
        titleColor: '#a80099',
        titleColorActive: ''
      }}
    />
    <Footer>
      <Text text="You can see more about my work experience in my linkedin" color="white" type="caption1" />
      <a href="https://www.linkedin.com/in/yanndev/"><Icon icon="linkedin" color="white" size="xsmall" /></a>
    </Footer>
  </Container>
)

export default Contact
