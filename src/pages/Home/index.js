import React, { useEffect } from 'react'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { events, firebaseConfig } from 'app/utils/firebase'
import Footer from 'common/components/Footer'
import Header from './Header'
import About from './About'
import { Container } from './styles'
import { Projects } from './Projects'

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
      <Projects />
      <Footer />
    </Container>
  )
}

export default Home
