import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ButtonLink from 'common/components/Button/ButtonLink'
import Title from 'common/components/Title'
import Text from 'common/components/Text'
import { Container, StyledImage, Content, Overlay, TextContent } from './styles'

const Card = ({ title, src, description, githubLink, webLink }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <Container onClick={handleClick} className={isActive ? 'active' : ''}>
      <StyledImage src={src} alt={title} />
      <Overlay className={isActive ? 'active' : ''}>
        <Content>
          <TextContent>
            <Title text={title} type="h4" color="white" />
            <Text text={description} type="subtitle1" color="white" />
          </TextContent>
          <div>
            <ButtonLink href={githubLink} icon="touch" text="Github" />
            <ButtonLink href={webLink} icon="touch" text="Deploy" />
          </div>
        </Content>
      </Overlay>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  webLink: PropTypes.string.isRequired
}

export default Card
