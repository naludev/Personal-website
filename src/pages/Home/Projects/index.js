import React from 'react'
import Title from 'common/components/Title'
import NeonTitle from 'common/components/NeonTitle'
import Text from 'common/components/Text'
import { Container, Content, DescriptionContainer } from './styles'

export const Projects = () => (
  <Container>
    <Content>
      <DescriptionContainer>
        <Title text="WHAT I DO" type="h6" color="secondary" />
        <NeonTitle text="projects" type="h1" color="secondary" />
      </DescriptionContainer>
      <Text color="white" type="subtitle1" text="Working on it" />
    </Content>
  </Container>
)
