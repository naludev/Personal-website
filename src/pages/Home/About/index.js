import React from 'react'
import { renderDescription, renderTimeline } from './helper'
import { Container, DescriptionContainer, Content } from './styles'

const About = () => (
  <Container>
    <Content>
      <DescriptionContainer>
        {renderDescription()}
      </DescriptionContainer>
      {renderTimeline()}
    </Content>
  </Container>
)

export default About
