import React from 'react'
import NeonTitle from 'common/components/NeonTitle'
import Card from 'common/components/Card'
import { Container, DescriptionContainer, CardsContainer, Content } from './styles'
import { frontend } from './helper'

export const Technologies = () => (
  <Container>
    <DescriptionContainer>
      <NeonTitle text="My skills" type="h4" color="secondary" />
    </DescriptionContainer>
    <Content>
      <CardsContainer>
        {frontend.map((i) => <Card text={i} />)}
      </CardsContainer>
    </Content>
  </Container>
)

export default Technologies
