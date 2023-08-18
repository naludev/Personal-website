/* eslint-disabled */
import React from 'react'
import PropTypes from 'prop-types'
import Title from 'common/components/Title'
import { Container, Content, StyledImage } from './styles'
import ButtonLink from '../Button/ButtonLink'

const Card = ({ title, src, description, githubLink, webLink }) => (
  <Container>
    <StyledImage src={src} alt="" />
    <Content>
      <Title text={title} type="h4" color="contrast" />
      <Title text={description} type="h6" color="white" />
      <ButtonLink href={githubLink} icon="touch" text="Github" />
      <ButtonLink href={webLink} icon="touch" text="Deploy" />
    </Content>
  </Container>
)

Card.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  webLink: PropTypes.string
}

export default Card
