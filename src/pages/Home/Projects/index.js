import React from 'react'
import Title from 'common/components/Title'
import NeonTitle from 'common/components/NeonTitle'
import Text from 'common/components/Text'
import Card from 'common/components/Card'
import IT from 'assets/images/instatragos.png'
import { Container, Content, DescriptionContainer } from './styles'

export const Projects = () => (
  <Container>
    <Content>
      <DescriptionContainer>
        <Title text="WHAT I DO" type="h6" color="secondary" />
        <NeonTitle text="projects" type="h1" color="secondary" />
        <Text color="white" type="subtitle1" text="Projects I've been working on" />
      </DescriptionContainer>
      <Card
        title="Insta tragos"
        src={IT}
        description="Web platform for drinks delivery"
        webLink="https://delivery-app-1-4kua.onrender.com/"
        githubLink="https://github.com/naludev/delivery-app"
      />
    </Content>
  </Container>
)
