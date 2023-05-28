import React from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import { Container } from './styles'

const Home = () => (
  <Container>
    <Header />
    <About />
    <Skills />
    <Footer />
  </Container>
)

export default Home
