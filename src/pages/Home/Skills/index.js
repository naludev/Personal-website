import React from 'react'
import NeonTitle from 'common/components/NeonTitle'
import Text from 'common/components/Text'
import Title from 'common/components/Title'
import { Container, DescriptionContainer, TagList, Fade } from './styles'
import { renderTags } from './helper'

const Skills = () => (
  <Container>
    <DescriptionContainer>
      <Title text="WHAT I DO" type="h6" color="contrast" />
      <NeonTitle text="skills" type="h1" color="secondary" />
      <Text color="white" type="subtitle1" text="Some cool technologies and tools I work with" />
    </DescriptionContainer>
    <TagList>
      {renderTags()}
      <Fade />
    </TagList>
  </Container>
)

export default Skills
