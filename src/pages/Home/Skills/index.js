import React from 'react'
import NeonTitle from 'common/components/NeonTitle'
import Text from 'common/components/Text'
import { Container, DescriptionContainer, TagList, Fade } from './styles'
import { renderTags } from './helper'

const Skills = () => (
  <Container>
    <DescriptionContainer>
      <NeonTitle text="My skills" type="h4" color="secondary" />
      <Text color="white" type="subtitle1" text="Some cool technologies and tools I work with" />
    </DescriptionContainer>
    <TagList>
      {renderTags()}
      <Fade />
    </TagList>
  </Container>
)

export default Skills
