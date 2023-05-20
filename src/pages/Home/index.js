import React from 'react'
import Header from './Header/index'
import About from './About/index'
import Technologies from './Technologies'
import Footer from './Footer/index'
import { Container } from './styles'

const Home = () => (
  <Container>
    <Header />
    <About />
    <Technologies />
    <Footer />
  </Container>
)

export default Home
