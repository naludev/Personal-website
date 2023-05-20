import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

const Card = ({ text }) => (
  <Container>
    {text}
  </Container>
)

Card.propTypes = {
  text: PropTypes.string
}

export default Card
