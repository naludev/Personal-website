import React from 'react'
import Footer from 'common/components/Footer'
import Header from './Header'
import About from './About'
import { Container } from './styles'
import { Projects } from './Projects'
import Skills from './Skills'

const Home = () => (
  <Container>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </Container>
)

export default Home
