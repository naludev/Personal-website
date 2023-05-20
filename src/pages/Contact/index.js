import React from 'react'
import NeonTitle from 'common/components/NeonTitle'
import Footer from 'pages/Home/Footer'
import { Container } from './styles'
import Form from './Form'

const About = () => (
  <Container>
    <NeonTitle type="h3" color="secondary" text="Contact me" />
    <Form />
    <Footer />
  </Container>
)

export default About
