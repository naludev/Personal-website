import React, { useEffect } from 'react'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { events, firebaseConfig } from 'app/utils/firebase'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import { Container } from './styles'

const Home = () => {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)

  useEffect(() => {
    logEvent(analytics, events.HOME)
  })

  return (
    <Container>
      <Header />
      <About />
      <Skills />
      <Footer />
    </Container>
  )
}

export default Home
