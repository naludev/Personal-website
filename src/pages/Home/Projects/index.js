import React from 'react'
import Card from 'common/components/Card'
import Title from 'common/components/Title'
import NeonTitle from 'common/components/NeonTitle'
import { Container } from './styles'
import { content } from './helper'

export const Projects = () => (
  <Container>
    <Title text="WHAT I DO" type="h6" color="secondary" />
    <NeonTitle text="projects" type="h1" color="secondary" />
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {content.map((i) => (
        <Card
          key={i.id}
          title={i.title}
          src={i.src}
          tags={i.tags}
          description={i.description}
          githubLink={i.github}
          webLink={i.web}
        />
      ))}
    </div>
  </Container>
)
