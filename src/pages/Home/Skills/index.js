import React from 'react'
import NeonTitle from 'common/components/NeonTitle'
import Text from 'common/components/Text'
import Title from 'common/components/Title'
import { Container, DescriptionContainer } from './styles'

const Skills = () => (
  <Container>
    <DescriptionContainer>
      <Title text="WHAT I DO" type="h6" color="secondary" />
      <NeonTitle text="skills" type="h1" color="secondary" />
      <Text color="white" type="subtitle1" text="Some cool technologies and tools I work with" />
    </DescriptionContainer>
  </Container>
)

export default Skills
