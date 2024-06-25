import React from 'react'
import NeonTitle from 'common/components/NeonTitle'
import Footer from 'common/components/Footer'
import Title from 'common/components/Title'
import BackgroundParticles from 'common/components/Particles/Particles'
import { Container } from './styles'
import Form from './Form'

const Contact = () => (
  <Container>
    <BackgroundParticles />
    <Title text="GET IN TOUCH" type="h6" color="secondary" />
    <NeonTitle type="h1" color="secondary" text="contact" />
    <Form />
    <Footer />
  </Container>
)

export default Contact
